/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import FamilyTree from '@balkangraph/familytree.js';
import './style.css'

const Chart = (props) => {

    const divRef = React.createRef();

    useEffect(() => {
        const family = new FamilyTree(divRef.current, {
            nodes: props.nodes,
            enableSearch: false,
            zoom: false,
            nodeMouseClick: false,
            enablePan: false,
            mouseScrool: false,
            interactive: false,
            scaleInitial: FamilyTree.match.boundary,
            // padding: -10,
            levelSeparation: 200,
            siblingSeparation: 60,
            subtreeSeparation: 60,
            nodeTreeMenu: false,
            toolbar: false,
            

            nodeBinding: {
                img_0: 'img',
                field_0: 'name',
                field_1: 'position',
                icon: 'icon',
                titleCard: 'titleCard',
                add: 'add',
                icon2: 'icon2',
            }
        });

    }, [])


    FamilyTree.templates.tommy.field_0 =
        '<text width="230" style="font-size: 16px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';

    FamilyTree.templates.tommy.field_1 =
        '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="70" text-anchor="middle" class="field_1">{val}</text>';

    FamilyTree.templates.tommy.img_0 =
        '<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="80" y="-40" width="80" height="80" clip-path="inset(0% round 40px)" fill="black"></image>';

    FamilyTree.templates.tommy.icon =
        '<svg xmlns="http://www.w3.org/2000/svg" x="220" y=5 width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>';

    FamilyTree.templates.tommy.titleCard =
        `<svg width="120" height="80" x=65 y=-90 xmlns="http://www.w3.org/2000/svg class="title-card">
    <foreignobject x="0" y="0" width="120" height="80">
        <body xmlns="http://www.w3.org/1999/xhtml">
            <div class="title-card">
            <image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Brazilian_flag_icon_round.svg/1200px-Brazilian_flag_icon_round.svg.png" class="flag-pic" alt="dd" width=20 height=20/>
            {val}
            </div>
        </body>
    </foreignobject>
</svg>`;

    FamilyTree.templates.tommy.add =
        `<svg width="120" height="80" x=113 y=125 xmlns="http://www.w3.org/2000/svg class="title-card">
<foreignobject x="0" y="0" width="120" height="80">
<body xmlns="http://www.w3.org/1999/xhtml">
    <div class="add-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
    </div>
</body>
</foreignobject>
</svg>`;


    FamilyTree.templates.tommy.icon2 =
        `<svg width="120" height="100" x=80 y=100 xmlns="http://www.w3.org/2000/svg class="title-card">
    <foreignobject x="0" y="0" width="120" height="80">
        <body xmlns="http://www.w3.org/1999/xhtml">
            <div class="icon-two">
            <svg style="color: white" class="cart-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="white"></path> </svg>  
            Retail
            </div>
        </body>
    </foreignobject>
</svg>`;


    FamilyTree.templates.tommy.link =
        '<path stroke="#E8E8E8" stroke-width="4px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} Q{xb},{yb} {xc},{yc} L{xd},{yd}" />';

    return (
        <div id="tree" ref={divRef}></div>
    )
}

export default Chart;


