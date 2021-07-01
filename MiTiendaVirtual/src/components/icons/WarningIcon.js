import React from 'react'

const defaultStyle = {
    width: '64px',
    heigth: '64px'
}

export default function WarningIcon() {
    return (
        <svg version="1.1" 
            id="Capa_1"  
            x="0px" y="0px"
            viewBox="0 0 512 512" 
            width={defaultStyle.width}
            height={defaultStyle.heigth}
            >
            <path style={{fill:"#FFDA2D"}} d="M505.626,460.436c-8.488,14.717-23.715,23.505-40.711,23.505H47.085
	        c-16.996,0-32.213-8.788-40.711-23.505c-8.498-14.717-8.498-32.293,0-47.01L215.289,51.564
	        c8.498-14.717,23.715-23.505,40.711-23.505s32.213,8.788,40.711,23.505l208.915,361.862
	        C514.125,428.143,514.125,445.719,505.626,460.436z"/>
            <path  style={{fill:"#FDBF00"}} d="M505.626,460.436c-8.488,14.717-23.715,23.505-40.711,23.505H256V28.059
	        c16.996,0,32.213,8.788,40.711,23.505l208.915,361.862C514.125,428.143,514.125,445.719,505.626,460.436z"/>
            <path style={{fill:"#FFFFFF"}}  d="M298.121,179.586v109.436c0,23.235-18.896,42.131-42.121,42.131s-42.121-18.896-42.121-42.131
		    V179.586c0-23.225,18.896-42.121,42.121-42.121S298.121,156.361,298.121,179.586z"/>
            <path style={{fill:"#FFFFFF"}}   d="M298.121,386.262c0,23.225-18.896,42.121-42.121,42.121s-42.121-18.896-42.121-42.121
		    c0-23.225,18.896-42.121,42.121-42.121S298.121,363.037,298.121,386.262z"/>
            <path style={{fill:"#DCE6EB"}} d="M298.121,386.262c0,23.225-18.896,42.121-42.121,42.121v-84.242
		    C279.225,344.141,298.121,363.037,298.121,386.262z"/>
            <path style={{fill:"#DCE6EB"}}  d="M298.121,179.586v109.436c0,23.235-18.896,42.131-42.121,42.131V137.465
		    C279.225,137.465,298.121,156.361,298.121,179.586z"/>
        </svg>
    )
}
