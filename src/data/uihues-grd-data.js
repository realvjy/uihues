import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Copy from "../images/copy.svg"
import Dwn from "../images/download.svg"
import Tippy from '@tippy.js/react'
import {CopyToClipboard} from 'react-copy-to-clipboard';



const UIHuesGrd = () => {
    const data = useStaticQuery(graphql`
    query UIHuesGrdDataQuery {
        allUihuesGradients(skip: 1) {
            nodes {
            feed {
                entry {
                content {
                    type
                    _t
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
    //     "number": "huenum",
    //     "hues_palette": ["#091E3A", "#2F80ED", "#2D9EE0"],
    //     "created_date": "8-9-1990"
    // },
 
    

    return (
        <>
            {data.allUihuesGradients.nodes.map(huenode => {
                let color_data = huenode.feed.entry
                for (let i = 6; i < color_data.length; i+=6) {
                    let number = color_data[i].content._t
                    let hue_hex1 = color_data[i+1].content._t 
                    let hue_hex2 = color_data[i+2].content._t 
                    let hue_hex3 = color_data[i+3].content._t
                    let angle = color_data[i+4].content._t
                    let created_date = color_data[i+5].content._t
                    let new_hues = {"number" : number, "hue_hex1" : hue_hex1, "hue_hex2" : hue_hex2, "hue_hex3" : hue_hex3, "angle": angle,"created_date": created_date}
                    hueNum.push(new_hues)
                }
                
            })}
             <div className="uihues-nav">
                <ul>
                    <li><Link to="/">Colors</Link></li>
                    <li><Link to="/gradient" className="active">Gradients</Link></li>
                </ul>
            </div>
            
            <div className="uihues-container">
            {hueNum.reverse().map((color_data, i) => (
               <div className="color-wrap" key={i}>
               <div className="color-box" hues={`#`+color_data.number} key={i}>
                   <div className="hue-meta">
                       <h3 className="hue-num">#{color_data.number}</h3>
                       <ul className="hue-atn">
                           <li>
                            <Tippy content="coming soon.."
                                animation="shift-away"
                                size="small"
                                placement="left-end"
                                delay={[100, 0]}
                            >
                            <a href="#"><Dwn /></a>
                            </Tippy>
                           </li>
                       </ul>
                    </div>
                    <CopyToClipboard text={`background: linear-gradient(${color_data.angle}deg, ${color_data.hue_hex1} 0%, ${color_data.hue_hex2} 100%);`} key={i}>
                    <ul date={color_data.created_date} className="color-hex">
                            <li className="hues gradient" style={{background:`linear-gradient(${color_data.angle}deg, ${color_data.hue_hex1}, ${color_data.hue_hex2})`}}>
                            <div className="copyic_wrap" key={i}>
                                        <Copy key={i} /> <span className="csss">Copy CSS</span>
                            </div>
                            <Tippy content="Copied"
                                    animation="fade"
                                    size="small"
                                    placement="bottom"
                                    trigger="click"
                                    duration= "0"
                                    delay="10"
                                    onShow={instance => (setTimeout(() => {
                                        instance.hide()
                                    }, 600))}
                                >
                                <span className="grdhex" key={i}>{color_data.hue_hex1} {color_data.hue_hex2} {color_data.angle}°</span>
                                </Tippy>
                            </li>
                        </ul>
                    </CopyToClipboard>
               </div>  
               </div>
            ))}
            </div>
        </>
    )

}

export default UIHuesGrd