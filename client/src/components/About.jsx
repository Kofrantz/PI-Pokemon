import './styles/About.css'
import Footer from './Footer'
import { ReturnBtn } from './NotFound'
import brickwall from '../multimedia/brickWall.jpg'

export default function About(props){
    return(<div className="About">
        <img className="brickwall" src={brickwall}/>
        <ReturnBtn/>
        <h1 className='aboutTitle'>About Me</h1>
        <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
            <div className='svgPikaAbout'>
                <svg
            id="prefix__Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 572 952.4"
            xmlSpace="preserve"
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
                ".prefix__st0{fill:#ffcd25}.prefix__st1{fill:#ff1f01}.prefix__st2{fill:#605740}.prefix__st3{opacity:.3;enable-background:new}.prefix__st4{fill:#824b03}.prefix__st6{fill:none;stroke:#fff;stroke-width:8;stroke-linecap:round;stroke-miterlimit:10}.prefix__st9{opacity:.2;fill:#fff;enable-background:new}.prefix__st10{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.prefix__st11{stroke-linejoin:round}.prefix__st11,.prefix__st13{fill:none;stroke:#000;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10}"
                }
            </style>
            <g id="prefix__Capa_3">
                <path
                className="prefix__st0"
                d="M3.1 572.2c.7-24 3.3-45.5 6.5-63.8.8-13.4 2.1-30.9 4.5-51.1 1.4-12.1 3-26.1 6.2-43.8 5.2-28.9 6.8-25.1 19.8-79.2.2-.9.4-1.8.7-2.7 1.5-6.2 2.6-11.3 3.7-15.7 2.9-12.2 5-18.7 10.7-26.6.2-.2.4-.5.5-.8l12.5-19.2c-5.8-9.8-11.5-20.5-17-32-17.7-37.2-27.3-72.3-32.6-101.9 0 0-2.2-7.5-4.3-21.7-3-20.5-5.7-54.8-.8-100.3l.6-5.7c1-8.6 8.8-5.2 8.8-5.2 7.7 10.3 15.8 22 24 35.1 15.7 25 31.6 55.2 45.2 90.6 14.4 37.8 22.7 72.5 27.5 101.5 10.8-4 26.8-8.6 46.5-9.5 21.8-1 39.6 2.8 51.2 6.3 13-29.9 26.4-53 36.8-69.3 5.6-8.7 12-18.6 22-31 16.9-20.9 32.4-34.3 42.4-42.9 14.1-12.1 26.7-20.9 40.6-30.2 5.8-3.9 11.9-7.9 18.4-12.2 3.4-2.2 33.7-20.7 33.7-20.7 16.1 8.1-12.1 48.9-19.6 68.5-2.6 6.8-17.9 29.3-36.6 55.8-35.2 49.8-82.9 113.5-82.9 113.5 13 10.8 25.5 35.5 25.5 35.5l2.6 9.2 5.5 19.8 3.4 12 3.6 17.1 6.1 16.9 7.8 17.2c3.5 24.6-3.5 37.4-16.7 60.6-13.2 23.2-62.1 58.3-62.1 58.3 5.6 2.6 15.5 8 24.3 18.5 10.3 12.4 13.6 25.3 14.8 31.5.9 7.8 1.5 21-2.8 36.5-4.3 15.4-11.5 26.5-16.4 32.7 1.7 7.4 3.8 15.2 6.4 23.3 2.4 7.7 4.9 15 7.5 21.7 4.6 12.8 9.6 21.6 13.5 27.3 1.8 2.6 4.9 7.1 9 14 3.1 5.2 5.4 9.6 6.8 12.6 2 5.8 4 13.8 4.2 23.4.4 17-5 30.2-8.5 37.2-6.9 12.5-20.5 33.4-44.5 51.8-24.4 18.7-48.4 26.5-62.3 29.9-4.4 7.4-10.4 16.2-18.7 25.1-7 7.5-13.9 13.5-20 18 8.1-1 22.9-1.7 40 4 15.2 5.1 25.8 13 31.7 18.2.6 1.2 2.2 4.6 1.3 8.8-1.5 7.4-9.1 10-9.5 10.2-16.1 1.6-37.2 2.2-61.5-1.2-24.8-3.4-45.2-9.8-60.5-15.8-.6-1.7-1.7-6-.5-11.2 1.2-5.3 4.2-8.6 5.5-9.8-.4-.5-.8-.9-1.2-1.4-4.4-5-9-10.7-13.5-17.2-.6-.8-1.2-1.7-1.7-2.5-3.4-5-6.4-9.9-9-14.6-2.1-3.7-3.9-7.2-5.5-10.6-4.9-9.6-9.9-20.6-14.4-32.9-1.9-5.1-3.6-10.1-5.1-14.9-2.7-8.7-4.9-16.9-6.7-24.7-.3-1.2-.5-2.3-.8-3.5-3.3-10.7-6.7-21.5-10-32.2-2.6-8.3-5.2-16.6-7.8-25-1.1-3.5-2.1-6.9-3.2-10.4-3.1-7.5-6.1-15.8-9-24.7-2.3-7.2-4.5-14.8-6.5-22.8-3.4-13.7-5.7-26.6-7.2-38.3-2.3-18.1-3.6-39.5-2.9-63.4z"
                />
                <path
                className="prefix__st0"
                d="M37.7 821.1c.3-.7 2.9-5.7 8.4-6.9 3.8-.8 7.8.4 10.9 3.1 1.2 1.1 2.3 2.4 3.1 3.9l34 56c-2.8-.2-5.8-.5-9-1-1-.2-2.1-.4-3-.6-4.5-.9-8.5-2.2-12-3.4 1.4 4.3 3.1 10.4 3.7 17.9.3 2.9.4 5.9.3 9.1-.4 12.7-3.7 22.7-6.2 28.7-.4.7-3.6 5.5-9.7 6.3-5.3.7-9.1-2-9.9-2.6-3.7-14-7-30.2-9.1-48.4-.9-8-1.5-15.8-1.8-23.2-.8-14.2-.5-27.3.3-38.9z"
                />
                <path
                className="prefix__st1"
                d="M142.1 398.2c7.4 2.4 11.7 7.7 16 13 4 5 6.5 9.6 7.9 12.7 4 8 4.9 15.1 5.1 19.3.3 6.3.7 13.5-4 20-4.1 5.7-10 8-12.8 8.9-3.4 1-12.8 3.2-23.2-.9-16.5-6.4-21.4-23-22-25-1.1-3-2.5-7.5-3-13-.5-4.9-1.1-11.9 2-19 4.6-10.5 14.9-14.8 18-16 7.8-2.2 13.5-.8 16 0zM323.1 377.2c1.7 4 3.3 8 4.7 11.8.6 5 .8 12-.7 20.2-1.8 10-5.4 17.6-8.2 22.4-1.6-.7-19.9-8.9-23.8-28.4-3.2-16.2 5-33.5 20.5-42.4 2.6 5.2 5.1 10.6 7.5 16.4z"
                />
                <path
                className="prefix__st2"
                d="M14.1 7.7c1-8.6 8.8-5.2 8.8-5.2 7.7 10.3 15.8 22 24 35.1-6 8.9-12.2 19.4-17.8 31.6-7.4 16.2-12 31.4-14.9 44.4-3.1-21.3-5.9-57.7-.1-105.9zM360.1 85.2c.1-11.2-.3-21.9-1-32.1 5.8-3.9 11.9-7.9 18.4-12.2 3.4-2.2 33.7-20.7 33.7-20.7 16.1 8.1-12.1 48.9-19.6 68.5-2.6 6.8-17.9 29.3-36.6 55.8 2.9-18.1 4.9-37.9 5.1-59.3z"
                />
                <path
                className="prefix__st0"
                d="M272.1 523.2l6.6-17.7c8.1 9.6 16.9 19.6 26.4 29.7 1.6 1.7 3.2 3.3 4.7 5 6.8 7 13.5 13.7 20.1 20 20.9-84.8 41.8-169.5 62.7-254.3 24 6 57.6 17.3 93.5 39.4 32.5 20 56.5 42.5 73.2 61.2.8.8 1.5 1.7 2.2 2.5l1.8 2.1c.5.6 1.1 1.3 1.6 1.9l.2.2c.6.7 1.1 1.3 1.7 2 1.1 1.3 2.2 2.6 3.2 3.9-34.2 39.7-71.4 80.6-111.9 122.2-45 46.2-89.3 88.4-132.2 126.8l-18.1-48.6L276 652l-11.9 3.2-10.4-60.3 18.4-71.7z"
                />
                <path
                className="prefix__st3"
                d="M268.1 624.2c19-31 20.5-52 19-65-2-17-7-25-15-36l6.6-17.7c3.5 4 14.8 17 26.4 29.7 5.2 5.8 10.4 11.3 17 18 1.2 1.3 2.3 2.3 3 3 3.2 6 8.8 18.4 9 35 .2 16.5-5 28.9-8 35 2 3.7 4 7.3 6 11 40.9-36.8 83.1-77 126-121 36.4-37.3 70-74 101.2-109.8.8.8 1.5 1.7 2.2 2.5l1.8 2.1c.6.6 1.1 1.3 1.6 1.9l.2.2c.6.7 1.2 1.3 1.7 2 1.1 1.3 2.2 2.6 3.2 3.9-34.1 39.7-71.4 80.6-111.9 122.2-45 46.2-89.3 88.4-132.2 126.8l-18.1-48.6L276 652c-5.8-20.1-10-24.4-7.9-27.8z"
                />
                <path
                className="prefix__st4"
                d="M36.1 700.2c7.5 2 14.2 4.4 19.9 6.8 3.3 1.4 4.1 5.8 1.5 8.2-3.8 3.6-8.6 7.4-14.4 11-4 2.4-7.8 4.3-11.3 5.8-1.1-3.5-2.1-6.9-3.2-10.4-3.1-7.5-6.1-15.8-9-24.7 5.1.8 10.6 1.8 16.5 3.3zM39.6 757c5.1.7 10.6 1.7 16.5 3.2 7.5 2 14.2 4.4 19.9 6.8 3.3 1.4 4.1 5.8 1.5 8.2-3.8 3.6-8.6 7.4-14.4 11-4.5 2.8-8.9 4.8-12.8 6.4-.3-1.2-.5-2.3-.8-3.5-3.3-10.6-6.6-21.4-9.9-32.1-.1 0-.1 0 0 0z"
                />
                <path
                className="prefix__st3"
                d="M194.1 520.2c-11.3 1-24-3-27-3-.3 0-.9.1-1.1.4-.3.5.1 1.3 1.1 2.6 6.7 8.4 13 12 13 12 8.5 4.9 12.7 7.3 17 7 4.4-.3 8.2-3.6 16-10 0 0 8.8-7.3 10.4-15 0-.2.1-.6-.1-.9-.4-.4-1.2-.2-2.2-.1-5.2.5-13.5 5.9-27.1 7z"
                />
                <path
                className="prefix__st3"
                d="M66.4 324.8s20.1 7.6 60.1 22.7l.6.2c7.2-1.9 14.4-3.7 21.6-5.6l5.7-1.5c1.5-.4 3-.8 4.6-1.2 2.7-.7 5.3-1.4 8-2.1 23.8-6.2 47.7-12.4 71.5-18.6l5.7-1.5c1.5-.4 3-.8 4.6-1.2 2.7-.7 5.3-1.4 8-2.1 14.5-3.8 29-7.5 43.5-11.3.1 0 .2-.1.3-.1 1.7-.5 3.5.4 4.4 1.9.8 1.5 1.6 3.2 2.2 5.1 1 3 1.5 5.8 1.7 8.1.1 1.3-.5 2.6-1.6 3.4l-.4.3c-.4.3-.7.6-1 1-.5.7-.7 1.6-.6 2.5.5 5.5 4 8.7 3.9 14.7 0 .3-.1.6-.1.9-.5 2-1.6 5-3.8 8.1-.2.3-.6.8-1.1 1.4-1.2 1.5-4 4.2-9.5 5.9-.1 0-.2.1-.3.1l-5.7 1.3-22.9 5.2c-.3.1-.6.1-.9.1-1.8 0-3.2-.3-4-.5-10.1-2.3-12.8-11.3-25.5-18-.6-.3-1.2-.6-1.7-.8-.6-.3-1.2-.4-1.8-.4-2.9.1-7.7.8-12.5 3.7-2.1 1.3-3.8 2.7-5 4-.6.7-1 1.5-1.1 2.4-.2 3.4-.3 4.7.1 7.2 1 6 2.5 8.2 1 10.5-.4.5-.7 1-1.1 1.5-1.1 1.4-2.3 2.3-3.3 3-.1.1-.3.2-.4.3-.7.3-1.3.7-2 1-1.2.6-2.5 1.2-3.9 1.8-1.6.7-3.3 1.4-5.1 2l-6.1 2c-3.4 1.3-1 .4-5 1.5-6.7 1.7-12.8 2.6-18 3-3.5.1-10.5-.1-18-4-11.3-5.9-20.8-12-22-15-.1-.1-.2-.1-.4-.1-29.3-12-36.7-15-66-27l.4-.3c-1.8 4.3-14.1 40.2-15 79-.2 10.5.3 24.4 6 40 3.1 8.5 6.9 15.3 10 20 7.9 12.1 16.8 20.2 23 25-1.4-1.1-19.8-15.4-37-9-18 6.7-29.7 34.1-18 62-2.7 4.7-20.4 36.3-7 68 17.4 41.2 70.9 43.8 77 44 3.9.2 42.8 1.2 73-24 8-6.7 21-17 21-17 0 .1-5.1 11.4-2 17 2.7 4.8 11 5 14 5 23.8.4 62.5-38.3 71-47-1.8 5.8-18.7 56.8-69 73-25 8-47 3.8-57.8 1-7.9 6.3-29.5 21.6-61.2 24-21.8 1.7-36.9-3.3-36.9-3.3 9.4 46.1 20.7 83.4 29.8 110.3 16.9 49.7 25.4 59.8 36 65 35.4 17.2 86-25.8 92-31-9.6 18.6-19.5 32.5-27 42-9.8 12.4-14.9 18.7-24 24-3.7 2.2-25.8 14.5-47 6-2-.8-4-1.8-6-3-.8 2-2.1 5.8-1 10 4 15.7 36.6 20.4 70 25 11.5 1.6 28.3 3.4 49 4-17.5 1-39.3.8-64-3-23.3-3.5-43.2-9.3-59-15 0 0-1.9-5.6-2-9-.1-2.8 1.1-6.9 7-12-7.9-8.5-12.6-14.7-15.3-18.5-.8-1.2-1.7-2.5-1.7-2.5-3.4-5-6.4-9.9-9-14.6-4.5-.9-8.5-2.2-12-3.4 1.4 4.3 3.1 10.4 3.7 17.9-5.8-2.4-12.3-5.9-18.7-10.9-7.5-5.8-13.3-12.4-17.8-19.2-.7-14.3-.4-27.4.4-38.9.3-.7 2.9-5.7 8.4-6.9 3.8-.8 7.8.4 10.9 3.1-2.7-8.7-4.9-16.9-6.7-24.7-.3-1.2-.5-2.3-.8-3.5-3.3-10.7-6.7-21.5-10-32.2-2.6-8.3-5.2-16.6-7.8-25-1.1-3.5-2.1-6.9-3.2-10.4-3.1-7.5-6.1-15.8-9-24.7-2.3-7.2-4.5-14.8-6.5-22.8-3.4-13.7-5.7-26.6-7.2-38.3-2.1-18.4-3.4-39.9-2.8-63.7.7-24 3.3-45.5 6.5-63.8.8-13.4 2.1-30.9 4.5-51.1 1.4-12.1 3-26.1 6.2-43.8 3.6-20.2 5.5-24.4 10.8-43.6 5.2-18.9 4.2-18.4 9.1-35.6 10.5-36.6 23-57 23-57 1.3-2.3 3-5 5-8-5.8-9.8-11.5-20.5-17-32-17.9-37.1-27.5-72.2-32.8-101.8 0 0-2.2-7.5-4.3-21.7-5.6-37.8-4.9-71.9-.8-100.4-.2 29.2 3.3 76.6 24.6 129.9 18 45 42.1 77.5 60 98-7.2 11.1-12 20.9-15 28-11 25.5-15.8 47.9-16.2 54.7l-.5.9z"
                />
                <path
                d="M76.1 624.2c-.6 3.9-1.9 7-3 9l9-9-3-3c-1.3-3.3-2.7-6.7-4-10 .8 2.6 1.9 7.3 1 13z"
                opacity={0.2}
                />
                <path
                className="prefix__st3"
                d="M222.1 823.2c6.3-17.1 8.9-32.4 10-44-3.1 17 2.2 23.2 4 25 10.6 10.5 39.5 4.4 70-20-8.2 14.4-25.5 40.2-57 60-18.6 11.7-36.2 17.6-49.3 20.9 7.1-9.8 15.6-23.8 22.3-41.9zM230.1 216.2c2-17 6-27.9 10.1-36.6l-24.1 48.6 16 4.8c-4-8.8-2.5-12.8-2-16.8z"
                />
                <path
                className="prefix__st6"
                d="M409.1 322.2c13.6 4.4 29.5 10.5 46.5 19.5 15.1 8 27.9 16.4 38.4 24.3M512 380.5c5.3 3.9 11.4 8.9 17.6 15.2 5.8 6 10.4 11.8 14 17M219.1 241.2c6.1 1.6 18.6 5.4 31 14 2.6 1.4 7.2 4.4 15.9 13.9M272.1 276.4c.6.8 1.3 1.8 2 2.8M378.1 50.2l27-17M72.1 119.2c-3.9-10.2-5.8-14.2-7-17M60.3 90.8c-1.2-2.6-6.5-13.4-11.2-21.6-9.3-16.5-17-32.5-26-44M311.3 374.7c.6 1.3 1.5 3.2 2.8 5.5 2.1 3.9 3.1 4.9 4 7 .8 1.9 1.5 4.9 1 9M271.1 551.2c-1.2-4.5-3.6-11.6-9-19-5.7-7.8-12.2-12.4-16.2-14.8M302.1 741.2c-.1-7.2-1.7-12.5-3-16-1-2.6-2-4.4-7-13-2.1-3.6-4.4-7.6-7-12M182.1 627.2c-1.2-4.3-3.8-11.1-9-18-4.9-6.5-10.3-10.6-14-13M170.1 916.2c2.5-.2 5.6-.3 9 0 4 .4 7.3 1.2 10 2"
                />
                <path
                d="M42.1 312.2c1.1-3.7 1.7-5.5 3-6 .4-.1 1.7-.5 4 1l82.4 31.8.6.2c7.2-1.9 14.4-3.7 21.6-5.6l5.7-1.5c1.5-.4 3-.8 4.6-1.2 2.7-.7 5.3-1.4 8-2.1 23.8-6.2 47.7-12.4 71.5-18.6l5.7-1.5c1.5-.4 3-.8 4.6-1.2 2.7-.7 5.3-1.4 8-2.1 15.5-4 31.1-8.1 46.6-12.1 1.2 1.9 2.7 4.5 3.8 7.8 1.4 4.1 1.7 7.8 1.8 10.3l-3.8 2.7c-.4 7.2-.7 14.3-1.1 21.5-.5 2-1.6 5.2-3.9 8.5-.4.5-.7 1-1.1 1.4-1.8 2.2-3.7 3.8-5.1 4.8-.1 0-.1.1-.2.1l-4.4 1-5.9 1.3-23.4 5.3c-3-.3-6-.7-9-1-1.6-1.4-3.9-3.7-6-7-2.4-3.8-2.7-5.9-5-9-1.4-1.9-3.6-4.4-7.5-6.7-2.7 0-8 .4-13.5 3.7-2.7 1.6-4.6 3.5-6 5-.3 4.4-.7 8.2-1 11-.9 7.5-1.5 9.8-3 12-.4.5-.7 1-1.1 1.5-1.2 1.5-2.5 2.5-3.5 3.1-.7.4-1.5.7-2.3 1.1-1.2.6-2.5 1.2-3.9 1.8-1.6.7-3.3 1.4-5.1 2-3.4 1.3-7.1 2.4-11.1 3.5-6.7 1.7-12.8 2.6-18 3-3.5.1-10.5-.1-18-4-11.3-5.9-15.8-16-17-19-.1-.1-.2-.1-.4-.1l-90-36.9c-.8-.7-2.2-2-2.6-4-.4-1.3.1-2.8 1-5.8z"
                fill="#333"
                />
                <path
                d="M42.1 312.2c1.1-3.7 1.7-5.5 3-6 .4-.1 1.7-.5 4 1l82.4 31.8 2.2 20.1-90-36.9c-.8-.7-2.2-2-2.6-4-.4-1.5.1-3 1-6z"
                fill="#1a1a1a"
                />
                <path
                className="prefix__st9"
                d="M261.7 305.5l42.3 40.1c-1.8 2.2-3.7 3.8-5.1 4.8l-45.2-42.8c2.7-.7 5.4-1.4 8-2.1zM249.2 308.8l45.1 42.8-5.9 1.3-45-42.6c2-.5 3.9-1 5.8-1.5zM172 328.9l41 38.9c-1.2 1.5-2.5 2.5-3.5 3.1-.7.4-1.5.7-2.3 1.1l-43.3-41c2.7-.8 5.4-1.5 8.1-2.1zM159.4 332.1l43.9 41.6c-1.6.7-3.3 1.4-5.1 2l-44.5-42.2c1.9-.4 3.8-.9 5.7-1.4z"
                />
            </g>
            <g id="prefix__Capa_2_1_">
                <path
                className="prefix__st10"
                d="M231.6 513.4c11.2-5.5 26.9-14.6 43-29 15.7-14.1 56.4-50.3 53-92-1.5-18.7-10.1-16.4-17-50-.5-2.7-1-5.3-1.5-7.9"
                />
                <path
                className="prefix__st11"
                d="M43.1 321.1c-.1.3-1.2 3.9-2.4 7.7-5 16.9-11.7 41.8-20 82.2-5.1 24.8-8.4 58.1-11.1 97.4C7.1 523.2 5.3 539.6 4 557c-.6 7.5-1.3 17.2-1.4 29.4 0 4.6-.1 26.9 4 55 7.1 48.7 23.8 75.1 49 170 3.8 14.2 9.6 31.4 19 50 10.7 21.2 22.7 37.8 33 50-1.3 1.2-5 4.9-6 11-.8 4.6.4 8.3 1 10 14.9 5.7 34.2 11.6 57 15 12.8 1.9 24.8 2.8 35.7 3 .2 0 4 0 9.1-.1 6.1-.1 5.1-.1 6.6-.1 11.2-.1 14.5.5 17.1-2 1-1 1.6-2 2-2.8 0 0 2.4 0 4-3.2 1-2 0-4 0-4s.9-2.5 1-3c.8-3-4.2-7.4-5-8-9.6-8.1-20.7-12.2-23.1-13.2-6.7-2.6-11.4-3.7-11.4-3.7-7.8-1.7-19.3-3.4-33.5-2.4 11.8-10.2 26.4-25.1 39.5-45.6 21-32.9 28.2-64.6 31-84"
                />
                <path
                className="prefix__st10"
                d="M83.1 876.2c-5.9-1.4-5.7-1.5-10-3.3-1.3-.6-2.7.7-2.3 2.1 2.1 7.3 4.1 17.9 2.9 30.4-.8 8.5-2.9 15.7-5 21-.3.7-2.7 6.3-9 8-3.5 1-6.6.3-8.7-.5-1.7-.7-3-2.1-3.5-3.9-3.7-14.3-6.9-30.9-8.9-49.6-2.3-21.8-2.2-41.4-1.1-58 .1-1.4.7-2.7 1.6-3.7 2.5-2.8 5.8-5.3 9.5-5.3 4 0 7 3 8 4 .2.2.5.5.8.7M267.8 623.9c2.1 10.8 4.8 20.3 7.6 28.8 4 11.8 8.4 21.3 12.2 28.7 11.5 22 20.6 29.3 25 47 5.4 21.5-.3 41.5-6 55-7 12.7-21 34.2-46 53-23.7 17.8-46.9 25.3-60.8 28.7"
                />
                <path
                className="prefix__st11"
                d="M178.2 583.5c1.7-3.1 3.5-6.7 6.4-11.2 11-16.8 25.9-27.3 39-34"
                />
                <path
                className="prefix__st10"
                d="M154.3 664.8c9.1 2.7 27.8 6.9 50.3 1.6 8.5-2 15.9-5 22-8.2 8.7-4.5 15.1-9.5 19-12.8 4.8-3.4 13.7-10.3 22.1-21.5 4.3-5.7 8.4-12.5 11.9-20.5 9.5-22.3 8.1-42.2 7-51-1.2-5.3-4.7-17.5-14.6-29.2-1.6-2-3.4-3.9-5.4-5.8-6.4-6-13-10-18.8-12.7"
                />
                <path
                className="prefix__st11"
                d="M81.9 624.1l-1.8-1.8c-.4-.4-1.2-1.4-1.5-2-1-2-4.5-8.6-2-10 1.3-.8 6.1.2 9 1 1 .2 1.9-.8 1.5-1.7-.9-2.1-2.1-5.1-2.7-6.8-.2-.8.4-1.5 1.2-1.3 2.9.8 9.9 2.8 10 2.8.6-1.4-6-9-3-10 2.2-.7 10.9 4.7 9.8 2.6-.1-.1-4.8-8.6-2.5-10.8 1.3-1.2 8.6 1.2 10.6 2.2 5.5 2.4 10.5 4.3 15.1 5.8"
                />
                <path
                className="prefix__st11"
                d="M72.6 634.4c2.5-3.1 5.6-6.5 9.3-10.2 7.4-7.4 17.2-15.5 29.7-22.8 4.8-2.8 9.5-5.1 14.1-7.2 18.7-8.2 35.4-10.9 45.9-11.8 0 0 3.4.6 6.1 1 .2 0 .4.1.5.2 1.3.5 1.9 2.2 1.1 3.4-1.3 2-2.7 4.3-2.7 4.4 0 0 4.4 1.1 7.5 1.8 1.5.4 2.3 2.1 1.5 3.5-1.3 2.4-2.9 5.6-2.3 6.8 0 0 5.1 1.5 8.1 2.3 1.5.4 2.2 2.2 1.3 3.6-1.4 2.1-3.6 4.6-2.9 5.8 0 0 4.3.7 7.3 1.2 1.5.3 2.5 1.8 2 3.3-.7 2.3-1.7 5.3-2.2 6.8-.2.6-.5 1.2-1 1.7-8.5 9.7-20.1 21.1-35.3 32.2-2.1 1.5-4.2 3-6.3 4.4-13.1 8.9-25.5 15.2-35.7 19.6-7 2.5-33.3 10.8-63-1-22.7-9.1-35.2-25.2-40-32-3.5-5.8-10-18.1-11-35-.9-15.7 3.3-27.8 6-34"
                />
                <path
                className="prefix__st11"
                d="M106.4 586.8c-2.4-5.5-7-14.2-15.7-22.5-10.6-10.1-22-14.2-28-16M298.8 295.8c-1-2.1-6.5-13-12.3-21.1-1.2-1.7-2.5-3.4-3.8-5.1-1.3-1.6-3.6-4.5-6.7-7.8-1.1-1.2-4.2-4.5-7.9-7.7M232.1 233c-23.7-9.7-47.1-11.6-48.8-11.7-27.7-2-50.2 3.9-63.7 8.7l-.1-.2C114 196.9 104 155.7 85 110.7 66.7 66.8 45 31.4 25.6 4.7c-3.4-4.7-10.9-2.8-11.5 3-3.7 31.5-4.9 73.2 3.2 121 10.4 60.9 32.2 108.4 50.2 140.1h-.1s-2 2.6-3.8 5.4c-5.9 8.9-10.7 18.9-15.6 32.1"
                />
                <path
                className="prefix__st10"
                d="M216.1 228.2c13.7-32.6 37-75.7 73-116.9 31.9-36.5 93.2-73.3 120-90.4 4.9-3.1 7.6 6.6 6.2 12.2-9.7 38.6-35.1 76.2-62.5 114-30.1 41.6-57.9 84.6-80.6 110.9M41.1 319.2c-.5-1-.5-2.1 1-7 1.5-4.8 2.1-5.6 3-6 1.1-.5 2.2-.2 3 0 66.2 26.5 83.2 33.6 83.3 33.6h.1c55.8-14.7 111.5-29.3 167.3-44 3.2-.8 6.4-1.6 9.5-2.3 1.3 1.9 3.1 4.9 4.3 8.9 1.1 3.7 1.3 6.9 1.3 9.2-.8.6-1.7 1.1-2.5 1.7-1.3.9-1.2 2.6-1.3 3.2-.5 4.3-.5 14.4-.9 18.1-1 8.6-8 14.4-9.5 15.5-1.7 1.3-4.2 2.2-20.3 5.6-11.3 2.4-17.1 3.6-21.5 2.3-6.3-2-8.4-11.5-16.2-20.2-.5-.5-1.5-1.6-3.1-2.4-3.5-1.6-7.2-.3-11 1-2.8 1-5.9 2.1-8 5-.8 1.1-1.3 2.1-1.4 2.6-1.6 12.4.1 18.4-5.6 24.4-4.5 4.7-15.1 7.4-26.5 10.9-10.7 3.2-15.8 3.2-20.3 3.4-17.2.7-29.8-16.8-31.8-22.5-.2-.7-.8-1.2-1.4-1.5-.8-.3-38.6-16.6-89.5-37.4-.6-.5-1.5-1.1-2-2.1zM212.7 408.7c1.3 1.7 5.7 7.2 13.5 9 11.8 2.8 20.9-5.2 21.8-6 1.3.4 9.5 2.9 17.8-1.9 7.7-4.5 9.8-12.1 10.2-13.5"
                />
                <path
                d="M243.2 385.6l-6.7-3.6c-1-.6-.9-2.1.2-2.5l11-3.6c1.2-.4 2.2.9 1.6 2l-4.3 7.3c-.4.6-1.2.8-1.8.4z"
                stroke="#000"
                strokeWidth={4}
                strokeMiterlimit={10}
                />
                <path
                className="prefix__st10"
                d="M318.9 431.7c-12.2-5.2-21.2-15.9-23.7-28.6-3.2-16.5 5.3-33.7 20.5-42.2M136.1 397.4c25.5 2.8 45 47.5 30.3 66.6-6.8 8.8-20.3 11.3-30.3 8.8-25-6.1-39-45.1-25-64.2 5.4-7.3 15.4-12.2 25-11.2zM279.6 603.4c9.5-22.3 8.1-42.2 7-51-1.2-5.3-4.7-17.5-14.6-29.2l6.6-17.7s49 56.5 51.2 54.8l.1-.1c.5-2.3 26.6-108.3 62.7-254.3 24 6 57.6 17.3 93.5 39.4 40.3 24.8 67.4 53.4 83.9 73.8-35.8 41.5-75.1 84.5-117.9 128.2-43 43.8-85.3 84-126.2 120.8l-18.1-48.6-32.4 33.2c-2.8-8.4-5.5-18-7.6-28.8 4.2-5.7 8.4-12.5 11.8-20.5z"
                />
                <path
                className="prefix__st13"
                d="M55.3 906.8c.9 2.5 2.2 6.9 1.8 12.4-.5 7.2-3.6 12.3-5.2 14.6M62.2 906.8c.7 2.9 1.4 7.2.9 12.4-.7 7-3.2 12.2-4.9 15.1M68.4 906.8c.4 3.1.5 7.4-.3 12.4-1 5.9-2.4 10-4 13M194.1 930.2c4.7.3 11.9 1.3 20 5 7.2 3.3 12.4 7.4 15.6 10.5M197.1 924.2c4.9.3 11.5 1.3 19 4 8 2.9 14.1 6.7 18.2 9.8M199.8 917c4.1.4 9.4 1.2 15.3 3.2 6.1 2 11 4.6 14.6 6.9"
                />
            </g>
                </svg>
            </div>
            <div className="circleShadow2"></div>
            <div className='textContainer'>
                <p>¡Hola! Me llamo Franco Alfano, y estoy estudiando desarrollo web. Este sitio web es un proyecto individual, parte de los estudios que estoy cursando, donde pongo en práctica todos los conocimientos adquiridos en estos últimos meses. </p>
                <p>Para la construcción de “PikaBoss” use tecnologías como React, Express, Sequelize y PostgresSql. Los lenguajes utilizados fueron Javascript, HTML, CSS. La decoración del sitio fue desarrollada sin usar librerías, por lo que todo es CSS puro. En cuanto a las imágenes de PikaBoss están desarrolladas en Adobe Illustrator, algunas están convertidas a formato “.png” pero otras son un componente de React con un SVG dentro.</p>
                <p>El sitio cuenta con “responsive design” por lo que se ajusta al dispositivo en el que se esté usando.</p>
            </div>
        </div>
        <Footer/>
        <svg style={{position: 'absolute', height: 0, width: 0}}>
                <filter id="blue-glow">
                    <feFlood result="flood" flood-color="blue" flood-opacity="1"></feFlood>
                    <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                    <feMorphology in="mask" result="dilated" operator="dilate" radius="2"></feMorphology>
                    <feGaussianBlur in="dilated" result="blurred" stdDeviation="5"></feGaussianBlur>
                    <feMerge>
                        <feMergeNode in="blurred"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                </filter>
            </svg>
        </div>
    )
}