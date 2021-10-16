import LinkCard from "./LinkCard"
import { useExperiment } from "@growthbook/growthbook-react"

export default function LinkList({links, refreshLinks }) {
    const { value } = useExperiment({
    "key": "ab-test",
    "variations": ["Control", "Variation 1"],
    "status": "draft",
    "url": "https://nervous-darwin-935326.netlify.app/",
    "anon": true
  })
  console.log(value);

  return (
    <div>
      <h2 className="my-4">Links</h2>
      {links && links.filter(link => !link.archived).map(link => {
        return <LinkCard key={link.id} link={link} refreshLinks={refreshLinks}/>
      })}
      <h2 className="my-4">Archived</h2>
      {links && links.filter(link => link.archived).map(link => {
        return <LinkCard key={link.id} link={link} refreshLinks={refreshLinks}/>
      })}
    </div>
  )
}