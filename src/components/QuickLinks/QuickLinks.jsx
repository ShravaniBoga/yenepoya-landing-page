import './QuickLinks.css'

const LINKS = [
  {
    label: 'Academics',
    path: 'M9 2 2 6l7 4 7-4-7-4Zm0 6.5L3.5 5.3V9c0 1.8 2.5 3.2 5.5 3.2S14.5 10.8 14.5 9V5.3L9 8.5Zm7-2v6h-1.2V6.5H16Z',
  },
  {
    label: 'Students',
    path: 'M8 2 1 5.5 8 9l5.5-2.75V10H15V5.5L8 2ZM3.5 8.2v2.9c0 1.4 2 2.6 4.5 2.6s4.5-1.2 4.5-2.6V8.2L8 10.6 3.5 8.2Z',
  },
  {
    label: 'Admissions',
    path: 'M8 1 1 5h14L8 1ZM2 6.5V13H1v1.5h14V13h-1V6.5h-1.5V13h-2V6.5H8V13H6V6.5H3.5V13h-2V6.5H2Z',
  },
]

function QuickLinks() {
  return (
    <div className="container quick-links">
      {LINKS.map((item) => (
        <a href="#top" className="quick-links__item" key={item.label}>
          <span>{item.label}</span>
          <svg viewBox="0 0 16 16" width="34" height="34" fill="currentColor">
            <path d={item.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}

export default QuickLinks
