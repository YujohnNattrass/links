import {useEffect, useState} from 'react';
import LinkForm from './components/LinkForm';
import LinkList from './components/LinkList';
import { useExperiment } from '@growthbook/growthbook-react';

function MyComponent() {
  const { value } = useExperiment({
    "key": "change-h1-color",
    "variations": ["Control", "Variation 1"],
    "status": "draft",
    "anon": true
  })

  return <div>Hello World: {value}</div>; // "Control" or "Variation 1"
}

function App() {
  const [links, setLinks] = useState([]);
  const loadLinks = async() => {
    try {
      const res = await fetch('/.netlify/functions/getLinks');
      const links = await res.json();
      setLinks(links);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadLinks();
  }, [])

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">List O' Links</h1>
      <MyComponent />
      <LinkForm refreshLinks={loadLinks} />
      <LinkList links={links} refreshLinks={loadLinks}/>
    </div>
  );
}

export default App;
