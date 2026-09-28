import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/search')({
  component: SearchComponent,
})

function SearchComponent() {
  // Extracting search parameters from the URL
  const { query } = Route.useSearch()

  // MOCK PAYLOAD FOR TESTING:
  // Inside the URL, this might look like: /search?query=<img src=x onerror=alert(1)>
  
  return (
    <div>
      <h3>Search Results</h3>
      {/* The inspector should flag this line for raw HTML injection */}
      <div dangerouslySetInnerHTML={{ __html: query }} />
    </div>
  )
}
