
export function InterSectionLazyLoad(childClassName, callBack) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        callBack && callBack(entry)
        observer.unobserve(entry.target)
      }
    })
  })
  const children = document.getElementsByClassName(childClassName) || [];
  [...children].forEach((child) => {
    observer.observe(child)
  })
}