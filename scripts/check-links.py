from pathlib import Path
import json
import re


ROOT = Path(__file__).resolve().parents[1]
MD_LINK = re.compile(r"\[[^\]]+\]\((/[^)\s#?]+)(?:[?#][^)]*)?\)")
HREF = re.compile(r'href="(/[^"#?]+)(?:[?#][^"]*)?"')
EXEMPT_PREFIXES = ("/api-reference",)


def page_exists(target: str, redirects: set[str]) -> bool:
    if target == "/" or target in redirects or target.startswith(EXEMPT_PREFIXES):
        return True
    relative = target.strip("/")
    return (ROOT / f"{relative}.mdx").is_file() or (ROOT / relative / "index.mdx").is_file()


def main() -> None:
    config = json.loads((ROOT / "docs.json").read_text())
    redirects = {item["source"] for item in config.get("redirects", [])}
    failures: list[str] = []
    for path in sorted(ROOT.rglob("*.mdx")):
        content = path.read_text()
        for pattern in (MD_LINK, HREF):
            for target in pattern.findall(content):
                if not page_exists(target, redirects):
                    failures.append(f"{path.relative_to(ROOT)}: missing internal target {target}")
    if failures:
        raise SystemExit("\n".join(failures))
    print("Internal documentation links are valid.")


if __name__ == "__main__":
    main()
