import {useState} from 'react';
import BlogList from '../components/List';
import DataFetching from '../components/DataFetching';

export default function Home () {
    const [blogs, setBlogs] = useState ([
        {title: "my blog post", body: "my blog body", author: 'mario', id: 1}, 
        {title: "my blog post", body: "my blog body", author: 'mario', id: 2}, 
        {title: "my blog post", body: "my blog body", author: 'mario', id: 3}, 
        {title: "my blog post", body: "my blog body", author: 'mario', id: 4}
    ]);

    return (
        <div>
        <BlogList blogs={blogs}/>
        <DataFetching />
        </div>
    )


};

