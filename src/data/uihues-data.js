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
    const hueNum = []
    // const uniqueHues = [];
    // {
    //     "number": "Omolon",
    //     "hues_palette": ["#091E3A", "#2F80ED", "#2D9EE0"],
    //     "created_date": "8-9-1990"
    // },

    return (
        <>
            {data.allUihuesPosts.nodes.map(huenode => {
                let color_data = huenode.feed.entry
                for (let i = 6; i < color_data.length; i+=6) {
                    let number = color_data[i].content._t
                    let hues_palette = [color_data[i+1].content._t, color_data[i+2].content._t, color_data[i+3].content._t, color_data[i+4].content._t]
                    let created_date = color_data[i+5].content._t
                    let new_hues = {"number" : number, "hues_palette": hues_palette, "created_date": created_date}
                    hueNum.push(new_hues)
                }
                
            })}

            <div className="uihues-nav">
                <ul>
                    <li><Link to="//">All</Link></li>
                    <li><Link to="/">Colors</Link></li>
                    <li><Link to="/">Gradients</Link></li>
                </ul>
            </div>
            <div className="uihues-container">
            {hueNum.reverse().map((color_data, i) => (
               <div className="color-wrap" key={i}>
               <div className="color-box" hues={`#`+color_data.number} key={i}>
                   <h3>#{color_data.number}</h3>
                   <h4>add</h4>
                   <ul huesvalue={color_data.hues_palette} date={color_data.created_date}>
                    {/* Extracting Color Hex */}
                    {color_data.hues_palette.map((hue_hex, n) =>(
                        <li className="hues" key={n} style={{backgroundColor:hue_hex}} colorhex={hue_hex}><a href="#">{hue_hex}</a></li>
                    ))}
                    </ul>
                   
                   
               </div>  
               </div>
            ))}
            </div>
        </>
    )

}

export default UIHues