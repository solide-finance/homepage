import Seo from "../../components/Seo/Seo";

export default function NotFoundPage() {
  return (
    <div className="standalone-page">
      <Seo
        title="Page not found — SolideFinance"
        description="The page you requested could not be found."
        path="/404"
        noIndex
      />
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p className="standalone-page__intro">The page may have moved or the address may be incorrect.</p>
      <a className="button-like" href="/">
        Return home <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
