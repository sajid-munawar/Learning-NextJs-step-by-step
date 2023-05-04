import React from 'react'

const getContentfulData = async () => {
    const data = await fetch('https://cdn.contentful.com/spaces/je8ju9lbuymg/environments/master/entries?access_token=RpHnyUdQDzA1ZUOZyUwPxVqbMiXVI8R00k2fkM0l3Aw')
     // Recommendation: handle errors
  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
    const json = await data.json()
    return json
}

const page =async () => {
    const data= await getContentfulData()
    console.log();
  return (
    <div>
        <h1>{data.items[0].fields.title}</h1>
        <h1>{data.items[0].fields.publishDate}</h1>
        <p>{data.items[0].fields.body.content[0].content[0].value}</p>
    </div>
  )
}

export default page;