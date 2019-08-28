import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const UIHues = () => {
    const data = useStaticQuery(graphql`
    query UIHuesDataQuery {
        allUihuesPosts(skip: 1) {
                nodes {
                    feed {
                        entry {
                            content {
                                _t
                                type
                            }
                        }
                    }
                }
            }
        }
    `)

    
    // console.log(data.allUihuesPosts.nodes.feed.ttitle._t);

    

    return (
        <>
            {/* {
                data.uihuesPosts.feed.entry.content.map((items, i) => (
                <div>
                        {items._t}
                </div>
                ))} */}
            
            {data.allUihuesPosts.nodes.map(huenode => {
                {huenode.feed.entry.map(uihues =>{
                    console.log(uihues.content._t);
                })}
            })}
            
        </>
    )

}

export default UIHues