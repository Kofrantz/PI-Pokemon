import * as React from "react"
import { useHistory } from "react-router"
import './styles/pikaBossSVG2.css'

export default function PikaBossSvg2(props) {
    const [aboutInv, setAboutInv] = React.useState(false)
    const history = useHistory()

    React.useEffect(() => setAboutInv(true), [])
    function handleClick(e) {
        if(e.target.value === 'false') {
            setAboutInv(false)
        }else{
            history.replace('/about')
        }
        setTimeout(() => props.changeAbout(false), 500)
    }
    return (
        <div id="aboutInv" >
            <div id="dialog" style={aboutInv ? {bottom: '0'} : {bottom: '-300px'}}>
                <p>¿Te gustaria conocer al creador de esta pagina?</p>
                <div className='dialogBtns' style={aboutInv ? {bottom: '0'} : {bottom: '-300px'}}>
                    <button className='dialogBtn' onClick={handleClick} value={true}>Si</button>
                    <button className='dialogBtn' onClick={handleClick} value={false}>Mas Tarde</button>
                </div>
            </div>
            
            <div id="circleShadow" style={aboutInv ? {bottom: '0'} : {bottom: '-300px'}}/>
            <svg
                id='pikaBossSvg2'
                style={aboutInv ? {bottom: '0'} : {bottom: '-300px'}}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 572.02 952.37"
                {...props}
                >
                <filter id="white-glow">
                <feFlood result="flood" flood-color="blue" flood-opacity="1"></feFlood>
                <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
                <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                <feMerge>
                    <feMergeNode in="blurred"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
                </filter>
                <style>
                    {
                    ".prefix__st0{fill:#ffcd25}.prefix__st1{fill:#ff1f01}.prefix__st2{fill:#605740}.prefix__st3{opacity:.3}.prefix__st4{fill:#824b03}.prefix__st6{fill:none;stroke:#fff;stroke-width:8;stroke-linecap:round;stroke-miterlimit:10}.prefix__st9{opacity:.2;fill:#fff}.prefix__st10{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.prefix__st11{stroke-linejoin:round}.prefix__st11,.prefix__st13{fill:none;stroke:#000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10}"
                    }
                </style>
                <g id="prefix__Capa_3">
                    <path
                    className="prefix__st0"
                    d="M566.77 635.95a350.646 350.646 0 01-7.25 38.26 352.2 352.2 0 01-6.48 22.78c-2.87 8.9-5.91 17.14-8.97 24.67-1.08 3.46-2.15 6.92-3.22 10.38-2.59 8.32-5.18 16.63-7.76 24.95-3.33 10.73-6.67 21.47-10 32.2-.25 1.14-.5 2.29-.77 3.46-1.75 7.71-3.94 15.97-6.68 24.66-1.53 4.84-3.23 9.81-5.12 14.9-4.55 12.24-9.5 23.21-14.41 32.86-1.65 3.36-3.48 6.89-5.55 10.57a210.87 210.87 0 01-9.04 14.57c-.58.85-1.16 1.7-1.74 2.53-4.58 6.52-9.17 12.25-13.54 17.24-.41.47-.82.93-1.22 1.38 1.29 1.29 4.26 4.59 5.5 9.85 1.22 5.19.07 9.42-.5 11.15a261.734 261.734 0 01-122 17c-.39-.13-7.99-2.79-9.5-10.15-.86-4.18.71-7.58 1.32-8.75 5.89-5.2 16.45-13.18 31.68-18.25 17.13-5.7 31.93-4.98 40-4a147.664 147.664 0 01-20-18 147.937 147.937 0 01-18.74-25.14c-13.9-3.39-37.89-11.12-62.26-29.86a167.191 167.191 0 01-44.5-51.85c-3.49-6.94-8.87-20.11-8.5-37.15.21-9.66 2.2-17.67 4.17-23.44 1.46-2.94 3.76-7.34 6.83-12.56 4.07-6.91 7.23-11.36 9-14 3.82-5.7 8.83-14.45 13.45-27.28 2.6-6.74 5.15-13.99 7.55-21.72 2.53-8.15 4.62-15.94 6.36-23.31a94.781 94.781 0 01-16.36-32.69 95.084 95.084 0 01-2.78-36.5c1.17-6.23 4.45-19.1 14.78-31.5 8.78-10.53 18.66-15.96 24.28-18.53 0 0-48.96-35.1-62.12-58.29-13.16-23.18-20.2-36-16.68-60.59l7.77-17.24 6.08-16.91 3.64-17.14 3.35-12.02 5.54-19.81 2.58-9.25s12.53-24.67 25.54-35.45c0 0-47.64-63.71-82.86-113.43-18.76-26.5-34-49.02-36.61-55.81-7.51-19.53-35.72-60.4-19.62-68.47 0 0 30.36 18.44 33.74 20.69 6.48 4.32 12.54 8.29 18.38 12.19 13.9 9.26 26.55 18.1 40.64 30.19 9.98 8.57 25.46 21.98 42.35 42.87 9.99 12.36 16.44 22.34 22 31 10.44 16.26 23.86 39.4 36.82 69.27 11.59-3.46 29.38-7.28 51.18-6.27 19.76.92 35.73 5.47 46.54 9.49a521.8 521.8 0 0127.46-101.49 522.37 522.37 0 0145.18-90.62 525.087 525.087 0 0124.02-35.12s7.75-3.36 8.78 5.19c.23 1.91.44 3.81.64 5.68 4.92 45.46 2.25 79.82-.76 100.31-2.08 14.17-4.32 21.71-4.32 21.71-5.33 29.66-14.96 64.77-32.54 101.85a395.806 395.806 0 01-17 32l12.45 19.24c.19.26.37.51.55.76 5.68 7.84 7.76 14.35 10.68 26.58 1.05 4.39 2.2 9.51 3.67 15.71.21.88.43 1.78.65 2.71 13.01 54.15 14.65 50.33 19.81 79.25 3.15 17.65 4.78 31.62 6.19 43.75 2.36 20.3 3.7 37.72 4.5 51.15 3.23 18.38 5.8 39.84 6.5 63.85.69 23.85-.62 45.3-2.75 63.74z"
                    />
                    <path
                    className="prefix__st0"
                    d="M535.37 860.05c-.34 7.4-.93 15.14-1.85 23.16a340.848 340.848 0 01-9.13 48.41c-.8.59-4.61 3.29-9.87 2.59-6.18-.82-9.33-5.67-9.75-6.35-2.55-6-5.9-15.95-6.25-28.65-.09-3.23.03-6.28.29-9.14.65-7.44 2.27-13.54 3.71-17.86-3.42 1.27-7.43 2.5-11.96 3.43-.99.21-2 .4-3.04.57-3.21.54-6.23.85-9 1l34-56c.84-1.52 1.9-2.84 3.12-3.9 3.07-2.73 7.11-3.92 10.88-3.1 5.53 1.21 8.08 6.23 8.42 6.93.79 11.55 1.09 24.62.43 38.91z"
                    />
                    <path
                    className="prefix__st1"
                    d="M446.52 398.21c3.15 1.19 13.37 5.53 18 16 3.13 7.08 2.46 14.14 2 19-.52 5.53-1.87 9.98-3 13-.58 2.05-5.52 18.56-22 25-10.45 4.09-19.84 1.9-23.22.93-2.81-.89-8.68-3.19-12.78-8.93-4.67-6.55-4.31-13.74-4-20 .21-4.19 1.12-11.24 5.11-19.27 1.42-3.11 3.87-7.77 7.89-12.73 4.31-5.31 8.6-10.61 16-13 2.46-.79 8.2-2.21 16 0zM257 360.85c15.52 8.91 23.69 26.12 20.51 42.36-3.82 19.52-22.11 27.74-23.75 28.44a69.954 69.954 0 01-8.25-22.44 69.836 69.836 0 01-.7-20.19c1.44-3.84 3-7.78 4.7-11.81 2.45-5.77 4.96-11.23 7.49-16.36z"
                    />
                    <path
                    className="prefix__st2"
                    d="M558.38 113.65c-2.85-12.99-7.42-28.2-14.86-44.44a217.68 217.68 0 00-17.82-31.62 525.087 525.087 0 0124.02-35.12s7.75-3.36 8.78 5.19c5.78 48.28 3.01 84.65-.12 105.99zM217.64 144.55c-18.76-26.5-34-49.02-36.61-55.81-7.51-19.53-35.72-60.4-19.62-68.47 0 0 30.36 18.44 33.74 20.69 6.48 4.32 12.54 8.29 18.38 12.19a390.264 390.264 0 004.11 91.4z"
                    />
                    <path
                    className="prefix__st0"
                    d="M318.87 594.86l-10.35 60.35-11.85-3.16-31.83-32.61-18.15 48.57c-42.84-38.4-87.16-80.58-132.17-126.8-40.51-41.6-77.76-82.52-111.91-122.2 1.03-1.27 2.1-2.57 3.22-3.91.55-.67 1.12-1.34 1.7-2.02.04-.06.09-.12.15-.18.53-.63 1.07-1.25 1.62-1.89.59-.69 1.21-1.4 1.83-2.1.71-.83 1.45-1.67 2.21-2.51 16.71-18.65 40.66-41.16 73.18-61.19 35.88-22.1 69.49-33.35 93.49-39.36 20.9 84.77 41.79 169.53 62.69 254.3 6.59-6.28 13.31-12.94 20.09-19.99 1.58-1.63 3.15-3.28 4.73-4.95a657.706 657.706 0 0026.41-29.71c2.2 5.9 4.39 11.81 6.59 17.71l18.35 71.65z"
                    />
                    <path
                    className="prefix__st3"
                    d="M296.67 652.05l-31.83-32.61-18.15 48.57c-42.84-38.4-87.16-80.58-132.17-126.8-40.51-41.6-77.76-82.52-111.91-122.2 1.03-1.27 2.1-2.57 3.22-3.91.55-.67 1.12-1.34 1.7-2.02.04-.06.09-.12.15-.18.53-.63 1.07-1.25 1.62-1.89.59-.69 1.21-1.4 1.83-2.1.71-.83 1.45-1.67 2.21-2.51a2651.442 2651.442 0 00227.18 230.81c2-3.67 4-7.33 6-11-3.02-6.06-8.21-18.5-8-35 .21-16.63 5.81-29.02 9-35 .7-.7 1.75-1.73 3-3 6.63-6.68 11.76-12.23 17-18 11.58-12.75 22.91-25.7 26.41-29.71 2.2 5.9 4.39 11.81 6.59 17.71-8 11-13 19-15 36-1.52 12.95 0 34 19 65 2.06 3.37-2.08 7.65-7.85 27.84z"
                    />
                    <path
                    className="prefix__st4"
                    d="M553.04 696.99c-2.87 8.9-5.91 17.14-8.97 24.67-1.08 3.46-2.15 6.92-3.22 10.38a88.006 88.006 0 01-25.74-16.8c-2.63-2.46-1.84-6.79 1.47-8.21a138.354 138.354 0 0136.46-10.04zM533.09 756.99c-3.33 10.73-6.67 21.47-10 32.2-.25 1.14-.5 2.29-.77 3.46a88.006 88.006 0 01-27.21-17.41c-2.63-2.46-1.84-6.79 1.47-8.21a138.066 138.066 0 0136.49-10.04h.02z"
                    />
                    <path
                    className="prefix__st3"
                    d="M351.52 513.21c-1.04-.09-1.88-.29-2.23.08-.27.29-.16.76-.13.92 1.56 7.71 10.35 15 10.35 15 7.76 6.44 11.64 9.67 16 10 4.33.33 8.55-2.11 17-7 0 0 6.29-3.64 13-12 1.01-1.26 1.4-2.13 1.11-2.6-.22-.35-.77-.4-1.11-.4-3 0-15.66 3.95-27 3-13.54-1.14-21.91-6.54-26.99-7z"
                    />
                    <path
                    className="prefix__st3"
                    d="M505.76 323.93c-.41-6.79-5.27-29.19-16.24-54.72-3.04-7.07-7.77-16.86-15-28 17.86-20.49 41.98-53.02 60-98 21.35-53.28 24.78-100.66 24.62-129.87 4.08 28.5 4.78 62.55-.76 100.31-2.08 14.17-4.32 21.71-4.32 21.71-5.33 29.66-14.96 64.77-32.54 101.85a395.806 395.806 0 01-17 32c2.03 2.98 3.69 5.7 5 8 0 0 12.54 20.36 23 57 4.91 17.19 3.89 16.7 9.06 35.62 5.25 19.2 7.14 23.42 10.75 43.63 3.15 17.65 4.78 31.62 6.19 43.75 2.36 20.3 3.7 37.72 4.5 51.15 3.23 18.38 5.8 39.84 6.5 63.85.69 23.85-.62 45.3-2.75 63.74a350.646 350.646 0 01-7.25 38.26 352.2 352.2 0 01-6.48 22.78c-2.87 8.9-5.91 17.14-8.97 24.67-1.08 3.46-2.15 6.92-3.22 10.38-2.59 8.32-5.18 16.63-7.76 24.95-3.33 10.73-6.67 21.47-10 32.2-.25 1.14-.5 2.29-.77 3.46-1.75 7.71-3.94 15.97-6.68 24.66 3.07-2.73 7.11-3.92 10.88-3.1 5.53 1.21 8.08 6.23 8.42 6.93.79 11.55 1.09 24.62.43 38.91-4.54 6.75-10.3 13.33-17.85 19.16-6.43 4.97-12.92 8.42-18.71 10.86.65-7.44 2.27-13.54 3.71-17.86-3.42 1.27-7.43 2.5-11.96 3.43a210.87 210.87 0 01-9.04 14.57s-.92 1.36-1.74 2.53c-2.64 3.77-7.34 9.99-15.26 18.47 5.86 5.1 7.06 9.16 7 12-.07 3.37-1.99 8.98-2 9a309.51 309.51 0 01-59 15 309.855 309.855 0 01-64 3c20.71-.58 37.54-2.43 49-4 33.4-4.57 66.03-9.35 70-25 1.06-4.19-.21-8.05-1-10a40.44 40.44 0 01-6 3c-21.24 8.47-43.3-3.85-47-6-9.07-5.28-14.17-11.59-24-24-7.5-9.47-17.43-23.41-27-42 6.02 5.23 56.57 48.19 92 31 10.64-5.16 19.06-15.33 36-65 9.17-26.89 20.44-64.22 29.85-110.27 0 0-15.09 4.97-36.85 3.27-31.74-2.47-53.25-17.77-61.19-24.05-10.77 2.88-32.82 7.08-57.81-.95-50.27-16.15-67.19-67.22-69-73 8.51 8.68 47.2 47.37 71 47 2.96-.05 11.33-.18 14-5 3.12-5.64-1.99-16.94-2-17 0 0 13 10.33 21 17 30.17 25.16 69.08 24.16 73 24 6.14-.24 59.58-2.83 77-44 13.41-31.7-4.27-63.29-7-68 11.74-27.9.04-55.33-18-62-17.25-6.38-35.65 7.92-37 9 6.21-4.82 15.14-12.87 23-25 3.07-4.73 6.89-11.51 10-20 5.72-15.63 6.24-29.54 6-40-.9-38.78-13.21-74.67-15-79l.35.29c-29.33 12.01-36.67 15.01-66 27.03-.12.04-.23.09-.35.14-1.19 2.96-10.68 9.11-22 15-7.48 3.89-14.48 4.13-18 4-5.24-.43-11.33-1.3-18-3-4-1.02-1.61-.2-5-1.46l-6.11-2c-1.79-.67-3.48-1.35-5.1-2.05a92.57 92.57 0 01-3.93-1.79c-.7-.33-1.37-.66-2.03-.99-.15-.08-.3-.16-.44-.26-.93-.64-2.13-1.6-3.27-2.95-.39-.45-.76-.95-1.12-1.5-1.47-2.24 0-4.46 1-10.46.42-2.5.32-3.81.09-7.17a3.79 3.79 0 00-1.07-2.42 25.667 25.667 0 00-5.02-3.95c-4.86-2.92-9.63-3.56-12.53-3.68-.62-.02-1.23.11-1.79.38-.46.22-1.04.5-1.68.84-12.66 6.66-15.37 15.64-25.5 17.96-.79.18-2.18.45-4.02.49-.32.01-.63-.02-.94-.09l-22.91-5.22-5.7-1.29c-.11-.03-.22-.06-.32-.09-5.57-1.69-8.31-4.4-9.55-5.89-.48-.58-.88-1.15-1.06-1.41-2.16-3.1-3.23-6.08-3.78-8.12-.08-.29-.12-.58-.13-.88-.14-6.05 3.31-9.22 3.86-14.72.08-.88-.15-1.75-.63-2.46-.26-.39-.58-.73-.97-1l-.41-.3a3.78 3.78 0 01-1.6-3.4 33.636 33.636 0 013.88-13.25c.84-1.57 2.64-2.38 4.36-1.93.09.02.19.05.28.07 14.51 3.77 29.01 7.54 43.51 11.31l7.98 2.07c1.52.4 3.04.79 4.56 1.19 1.9.49 3.81.99 5.71 1.48 23.84 6.2 47.68 12.39 71.52 18.58 2.66.69 5.32 1.39 7.98 2.08 1.52.39 3.04.79 4.56 1.18 1.9.5 3.81.99 5.71 1.48 7.2 1.88 14.41 3.75 21.61 5.62l.58-.22c40.04-15.09 60.06-22.64 60.1-22.66l-.44-.86z"
                    />
                    <path
                    d="M497.52 611.21c-1.33 3.33-2.67 6.67-4 10l-3 3 9 9c-1.08-2.04-2.39-5.1-3-9-.9-5.74.19-10.43 1-13z"
                    opacity={0.2}
                    />
                    <path
                    className="prefix__st3"
                    d="M372.78 865.07c-13.05-3.21-30.71-9.18-49.26-20.86-31.5-19.83-48.8-45.56-57-60 30.54 24.44 59.43 30.46 70 20 1.81-1.79 7.08-8.02 4-25 1.09 11.56 3.7 26.89 10 44a174.514 174.514 0 0022.26 41.86zM340.47 232.98l16.05-4.77-24.07-48.62c4.11 8.72 8.07 19.62 10.07 36.62.46 3.97 2 8-2.05 16.77z"
                    />
                    <path
                    className="prefix__st6"
                    d="M78.59 365.99c10.49-7.85 23.28-16.3 38.42-24.28 17.01-8.95 32.9-15.15 46.5-19.5M29.02 412.71a134.144 134.144 0 0131.62-32.23M306.6 269.15c8.7-9.52 13.36-12.5 15.91-13.94 12.36-8.58 24.86-12.41 31-14M298.52 279.21c.75-1.09 1.45-2.04 2.05-2.84M167.52 33.21l27 17M507.52 102.21c-1.23 2.79-3.06 6.77-7 17M549.52 25.21c-9.02 11.55-16.72 27.52-26 44-4.62 8.2-9.95 19.04-11.15 21.59M253.52 396.21c-.52-4.14.2-7.06 1-9 .88-2.14 1.87-3.15 4-7a83.49 83.49 0 002.78-5.54M326.76 517.36a55.951 55.951 0 00-16.25 14.85 55.963 55.963 0 00-9 19M287.52 700.21c-2.57 4.38-4.91 8.4-7 12-4.98 8.58-5.98 10.38-7 13-1.34 3.45-2.89 8.78-3 16M413.52 596.21a54.98 54.98 0 00-23 31M383.52 918.21c2.66-.83 6.04-1.63 10-2 3.44-.32 6.48-.23 9 0"
                    />
                    <path
                    d="M531.52 318.21c-.49 2.03-1.85 3.36-2.64 4.01-30 12.28-60.01 24.56-90.01 36.85-.12.04-.23.09-.35.14-1.19 2.96-5.68 13.11-17 19-7.48 3.89-14.48 4.13-18 4-5.24-.43-11.33-1.3-18-3-4-1.02-7.71-2.2-11.1-3.46h-.01c-1.79-.67-3.48-1.35-5.1-2.05a92.57 92.57 0 01-3.93-1.79c-.78-.37-1.53-.74-2.26-1.11-.95-.63-2.25-1.63-3.48-3.09-.39-.45-.76-.95-1.12-1.5-1.47-2.24-2.13-4.55-3-12-.33-2.84-.71-6.58-1-11a25.897 25.897 0 00-6-5c-5.43-3.26-10.75-3.68-13.46-3.7-3.9 2.31-6.18 4.84-7.54 6.7-2.28 3.13-2.56 5.22-5 9-2.13 3.3-4.43 5.6-6 7-3 .33-6 .67-9 1l-23.37-5.32-5.86-1.33-4.44-1.01-.18-.12c-1.4-1-3.28-2.56-5.09-4.81-.36-.44-.71-.91-1.06-1.41a25.925 25.925 0 01-3.89-8.55l-1.11-21.45-3.76-2.69c.03-2.56.37-6.2 1.76-10.31 1.11-3.29 2.55-5.89 3.8-7.78 15.52 4.03 31.05 8.07 46.57 12.1l7.98 2.07c1.52.4 3.04.79 4.56 1.19 1.9.49 3.81.99 5.71 1.48 23.84 6.2 47.68 12.39 71.52 18.58 2.66.69 5.32 1.39 7.98 2.08 1.52.39 3.04.79 4.56 1.18 1.9.5 3.81.99 5.71 1.48 7.2 1.88 14.41 3.75 21.61 5.62l.58-.22 82.42-31.78c2.26-1.54 3.63-1.14 4-1 1.3.48 1.88 2.33 3 6 .91 2.99 1.36 4.51 1 6z"
                    fill="#333"
                    />
                    <path
                    d="M531.52 318.21c-.49 2.03-1.85 3.36-2.64 4.01-30 12.28-60.01 24.56-90.01 36.85l2.23-20.08 82.42-31.78c2.26-1.54 3.63-1.14 4-1 1.3.48 1.88 2.33 3 6 .91 2.99 1.36 4.51 1 6z"
                    fill="#1a1a1a"
                    />
                    <path
                    className="prefix__st9"
                    d="M318.87 307.6l-45.2 42.83c-1.4-1-3.28-2.56-5.09-4.81l42.31-40.09 7.98 2.07zM329.14 310.27l-44.99 42.62-5.86-1.33 45.14-42.77c1.9.49 3.81.99 5.71 1.48zM408.64 330.93l-43.26 40.98c-.78-.37-1.53-.74-2.26-1.11-.95-.63-2.25-1.63-3.48-3.09l41.02-38.86c2.66.69 5.32 1.39 7.98 2.08zM418.91 333.59l-44.49 42.16h-.01c-1.79-.67-3.48-1.35-5.1-2.05l43.89-41.59c1.9.5 3.81.99 5.71 1.48z"
                    />
                </g>
                <g id="prefix__Capa_2">
                    <path
                    className="prefix__st10"
                    d="M263.48 334.51c-.45 2.58-.92 5.19-1.47 7.85-6.87 33.63-15.47 31.28-17 50-3.4 41.69 37.26 77.95 53 92 16.14 14.4 31.84 23.47 43 29"
                    />
                    <path
                    className="prefix__st11"
                    d="M340.01 778.36c2.77 19.36 9.96 51.08 31 84 13.12 20.53 27.72 35.42 39.5 45.61-14.2-.99-25.71.69-33.5 2.39 0 0-4.71 1.03-11.38 3.65-2.4.95-13.49 5.12-23.12 13.2-.76.64-5.81 4.95-5 8 .15.55 1 3 1 3s-1 2 0 4c1.61 3.22 4.02 3.19 4.02 3.19.35.77.95 1.83 1.98 2.81 2.6 2.47 5.88 1.95 17.07 2.01 1.51.01.55.01 6.64.07 5.17.05 8.97.08 9.13.08a273.915 273.915 0 0092.66-18.01c.64-1.7 1.77-5.4 1-10-1.03-6.1-4.73-9.83-6-11a258.128 258.128 0 0033-50 258.423 258.423 0 0019-50c25.2-94.9 41.88-121.33 49-170 4.1-28.06 4.03-50.37 4-55-.09-12.2-.83-21.95-1.39-29.43-1.31-17.39-3.11-33.74-5.61-48.57-2.77-39.36-6.03-72.63-11.14-97.41-8.32-40.34-14.95-65.26-19.98-82.17-1.14-3.85-2.26-7.43-2.34-7.7 0-.01 0-.01-.01-.02"
                    />
                    <path
                    className="prefix__st10"
                    d="M515.2 818.09c.29-.25.56-.49.81-.73 1.04-.98 3.97-3.95 8-4 3.8-.05 7.08 2.51 9.55 5.26a6.22 6.22 0 011.59 3.74c1.07 16.57 1.14 36.16-1.14 58a344.998 344.998 0 01-8.89 49.6 5.709 5.709 0 01-3.45 3.88c-2.09.82-5.16 1.49-8.66.52-6.32-1.74-8.73-7.33-9-8a80.056 80.056 0 01-5-21c-1.23-12.54.74-23.09 2.86-30.39.41-1.4-.99-2.64-2.33-2.07-4.3 1.8-4.13 1.93-10.03 3.31M372.78 865.07c-13.84-3.37-37.04-10.89-60.76-28.71-25.03-18.79-39.02-40.32-46-53-5.67-13.52-11.38-33.52-6-55 4.42-17.65 13.51-25.01 25-47 3.85-7.37 8.24-16.91 12.24-28.7 2.85-8.42 5.5-18 7.61-28.76"
                    />
                    <path
                    className="prefix__st11"
                    d="M349.01 538.36c13.07 6.74 28 17.22 39 34 2.91 4.45 4.73 8.07 6.39 11.16"
                    />
                    <path
                    className="prefix__st10"
                    d="M324.8 504.68a69.527 69.527 0 00-18.78 12.68c-2.01 1.9-3.82 3.85-5.44 5.8-9.85 11.75-13.32 23.86-14.56 29.2-1.13 8.81-2.48 28.67 7 51a98.102 98.102 0 0011.85 20.54c8.42 11.18 17.35 18.09 22.15 21.46a97.796 97.796 0 0018.95 12.83 96.542 96.542 0 0022.05 8.17c22.53 5.33 41.22 1.15 50.28-1.59"
                    />
                    <path
                    className="prefix__st11"
                    d="M446.89 594.19c4.63-1.53 9.66-3.45 15.12-5.83 2-1 9.33-3.38 10.62-2.19 2.36 2.17-2.38 10.65-2.45 10.78-1.04 2.06 7.64-3.32 9.83-2.59 3 1-3.59 8.61-3 10 .11 0 7.11-2.06 10-2.82.76-.2 1.44.53 1.19 1.28-.57 1.71-1.82 4.69-2.71 6.8-.41.97.46 1.98 1.48 1.73 2.98-.74 7.74-1.75 9.04-.99 2.45 1.43-1 8-2 10-.28.57-1.09 1.52-1.52 1.97-.56.59-1.17 1.2-1.8 1.82"
                    />
                    <path
                    className="prefix__st11"
                    d="M562.01 582.36c2.65 6.16 6.9 18.31 6 34-.98 16.93-7.45 29.22-11 35-4.75 6.85-17.29 22.94-40 32-29.67 11.84-56.05 3.45-63 1a218.61 218.61 0 01-77.33-56.24 4.6 4.6 0 01-.95-1.68c-.48-1.51-1.48-4.57-2.21-6.84-.48-1.47.46-3.02 1.99-3.28 3.01-.51 7.31-1.21 7.31-1.21.68-1.22-1.51-3.67-2.9-5.77-.88-1.34-.23-3.14 1.31-3.58 3.03-.86 8.07-2.3 8.09-2.33.61-1.11-.98-4.36-2.33-6.75a2.378 2.378 0 011.5-3.49c3.15-.77 7.53-1.84 7.54-1.85 0-.06-1.44-2.38-2.7-4.4-.8-1.26-.22-2.88 1.08-3.42.17-.07.35-.13.54-.16 2.72-.43 6.04-.95 6.07-1 10.49.95 27.2 3.58 45.88 11.83 4.61 2.03 9.34 4.4 14.12 7.17 12.5 7.25 22.29 15.42 29.68 22.79 3.69 3.67 6.78 7.15 9.32 10.21"
                    />
                    <path
                    className="prefix__st11"
                    d="M510.01 548.36c-6.03 1.75-17.35 5.93-28 16-8.71 8.24-13.36 16.99-15.74 22.45M304.52 254.21c-3.64 3.21-6.74 6.5-7.85 7.68-3.1 3.3-5.4 6.1-6.72 7.75-1.34 1.68-2.62 3.37-3.84 5.06-5.81 8.07-11.23 18.97-12.26 21.07M524.52 306.21c-4.82-13.25-9.63-23.23-15.56-32.1-1.84-2.76-3.83-5.37-3.83-5.37l-.11-.02c18.08-31.66 39.85-79.15 50.25-140.08 8.15-47.77 6.88-89.46 3.23-120.98-.67-5.79-8.11-7.74-11.52-3a535.535 535.535 0 00-59.47 105.91 534.199 534.199 0 00-34.45 119.13l-.13.25c-13.5-4.8-36-10.76-63.66-8.71-1.74.13-25.13 2.03-48.79 11.74"
                    />
                    <path
                    className="prefix__st10"
                    d="M300.5 257.99c-22.79-26.29-50.52-69.33-80.64-110.88-27.4-37.8-52.78-75.39-62.47-113.99-1.42-5.66 1.3-15.37 6.21-12.23 26.72 17.11 88.1 53.85 119.96 90.39 35.92 41.2 59.26 84.38 72.95 116.94M529.52 321.21c-50.85 20.8-88.73 37.04-89.49 37.36-.67.27-1.19.82-1.43 1.52-1.92 5.69-14.58 23.27-31.75 22.53-4.54-.2-9.63-.14-20.32-3.38-11.37-3.45-22.05-6.17-26.51-10.88-5.69-6.01-4-12-5.61-24.44-.06-.49-.58-1.45-1.39-2.56-2.12-2.91-5.17-4.01-8-5-3.81-1.32-7.48-2.6-11-1-1.62.74-2.6 1.81-3.1 2.36-7.79 8.67-9.91 18.19-16.18 20.16-4.37 1.37-10.13.18-21.46-2.26-16.17-3.49-18.61-4.36-20.33-5.65-1.46-1.09-8.49-6.87-9.46-15.46-.42-3.7-.38-13.84-.93-18.15-.08-.62.01-2.31-1.29-3.17-.83-.55-1.67-1.11-2.51-1.67-.03-2.26.17-5.48 1.26-9.16 1.18-3.99 2.95-6.99 4.3-8.93 3.17.78 6.35 1.56 9.53 2.34 55.78 14.67 111.54 29.35 167.32 44.02.03.01.06.01.09 0s17.04-7.09 83.26-33.58c.76-.25 1.92-.48 3 0 .92.41 1.51 1.21 3 6 1.53 4.93 1.5 6 1 7-.51 1.01-1.36 1.63-2 2zM296.66 396.27c.36 1.42 2.45 9.03 10.16 13.55 8.25 4.83 16.48 2.35 17.78 1.94.87.79 9.95 8.72 21.75 5.97 7.84-1.83 12.26-7.31 13.55-9.03"
                    />
                    <path
                    d="M327.62 385.14l-4.29-7.26c-.63-1.07.4-2.36 1.58-1.97l10.97 3.63c1.12.37 1.26 1.9.22 2.46l-6.68 3.63c-.63.35-1.43.13-1.8-.49z"
                    stroke="#000"
                    strokeWidth={4}
                    strokeMiterlimit={10}
                    />
                    <path
                    className="prefix__st10"
                    d="M257 360.85c15.15 8.53 23.64 25.7 20.46 42.2-2.45 12.72-11.54 23.4-23.7 28.6M461.53 408.7c13.98 19.09-.03 58.07-25.01 64.17-10.02 2.45-23.51.01-30.32-8.83-14.66-19.06 4.85-63.8 30.32-66.6 9.56-1.07 19.58 3.84 25.01 11.26zM304.87 623.9c-2.11 10.76-4.76 20.34-7.61 28.76l-32.42-33.22-18.15 48.57a2749.731 2749.731 0 01-126.17-120.8A2748.402 2748.402 0 012.61 419.01c16.48-20.36 43.63-48.99 83.91-73.8 35.88-22.1 69.49-33.35 93.49-39.36 36.04 146.03 62.18 251.99 62.69 254.3 0 .02.02.08.06.11 2.13 1.76 51.17-54.76 51.17-54.76l6.65 17.66c-9.85 11.75-13.32 23.86-14.56 29.2-1.13 8.81-2.48 28.67 7 51a98.102 98.102 0 0011.85 20.54z"
                    />
                    <path
                    className="prefix__st13"
                    d="M520.67 933.84c-1.57-2.29-4.64-7.42-5.16-14.63-.4-5.52.87-9.91 1.79-12.39M514.39 934.3c-1.68-2.89-4.21-8.11-4.87-15.08-.5-5.19.21-9.51.93-12.39M508.52 932.21c-1.6-3.05-3.04-7.11-4-13-.81-4.98-.65-9.26-.28-12.39M342.87 945.71c3.25-3.06 8.42-7.21 15.65-10.49 8.06-3.65 15.33-4.7 20-5M338.33 937.96a70.86 70.86 0 0118.19-9.75 70.77 70.77 0 0119-4M342.87 927.07a68.643 68.643 0 0129.91-10.05"
                    />
                </g>
            </svg>
        </div>
    )
}