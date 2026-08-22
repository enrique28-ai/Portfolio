function PagePlaceholder({ description, title }) {
  return (
    <section aria-labelledby="page-title" className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight" id="page-title">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">{description}</p>
    </section>
  )
}

export default PagePlaceholder
