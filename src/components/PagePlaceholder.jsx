function PagePlaceholder({ description, title }) {
  return (
    <section aria-labelledby="page-title" className="page-placeholder section-block">
      <div className="page-placeholder__content content-region">
        <h1 className="heading-display" id="page-title">
          {title}
        </h1>
        <p className="page-placeholder__description body-large">{description}</p>
      </div>
    </section>
  )
}

export default PagePlaceholder
