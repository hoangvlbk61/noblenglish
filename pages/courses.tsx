import Image from 'next/image';
import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
`

const Card = styled.div`
    width: 280px;
    height: 360px;
    border-radius: 15px;
    padding: 1.5rem;
    background: white;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 1.5s ease-out;
    box-shadow: 0px 7px 10px rgba(black, 0.5);
    &:hover {
        transform: translateY(20px);
        &:before {
            opacity: 1;
        }
        .info { 
            opacity: 1;
            transform: translateY(0px);
        }
        .hover-0 {
            transition: 1s ease-out;
            opacity: 0;
        }
    }
    &:before {
    
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        background: rgba(0,0,0, 0.6);
        z-index: 2;
        transition: 0.5s;
        opacity: 0;
    }
    img {
    
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 15px;
    }
    
    .info {
        position: relative;
        z-index: 3;
        color: white;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s;
        h2 {
            margin: 0px;
        }
        p {
    
            letter-spacing: 1px;
            font-size: 15px;
            margin-top: 8px;
        }
        button {
    
            padding: 0.6rem;
            outline: none;
            border: none;
            border-radius: 3px;
            background: white;
            color: black;
            font-weight: bold;
            cursor: pointer;
            transition: 0.4s ease;
            &:hover {

                background: dodgerblue;
                color: white;
            }
        }
    }
`;
const CoursesPage = (props: any) => {
    return (
        <div>
            <div className="grid grid-cols-2 my-10">
                <div className="flex flex-start flex-col p-10 mt-20" style={{ height: "400px" }}>
                    <div className="font-bold text-6xl mb-4">
                        Study From Home With Experts
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, adhuc mucius iuvaret usu ad, odio zril eu vis, his an erat admodum. Velit ludus electram ei pri, mei purto minim dolore et. Qui amet verterem inimicus ne, in qui animal fabellas.
                    </div>
                </div>
                <div className='relative'>
                    <div style={{ width: "10rem", height: "10rem", backgroundColor: "#89D0CA", top: "80px", right: "60px" }} className={"rounded-lg absolute rotate-45"} />
                    <Image src="/courses/courses1.jpg" alt="c1" width={400} height={400} className={"rounded-full relative"} />
                    <div style={{ width: "10rem", height: "10rem", backgroundColor: "pink", top: "-70px" }} className={"rounded-full absolute"} />
                </div>
            </div>

            <div className={"flex flex-col justify-center items-center"} style={{ background: "#89D0CA" }}>
                <div className="my-4 text-3xl text-white font-bold">
                    Our Courses Bring The Best
                </div>
                <Wrapper className="grid grid-cols-3 mb-10">
                    <Card>
                        <Image src="/courses/course-item1.jpg" alt="" width={400} height={400} />
                        <div className="absolute top-2.5 font-bold text-2xl underline underline-offset-4 hover-0" style={{ color: "#ffa314" }}>Beginner</div>
                        <div className="info">
                            <h2>Beginner</h2>
                            <p> Beginner is suitable for beginners</p>
                            <button> Contact now </button>
                        </div>
                    </Card>
                    <Card>
                        <Image src="/courses/course-item2.jpg" alt="" width={400} height={400} />
                        <div className="absolute top-2.5 font-bold text-2xl underline underline-offset-4 hover-0" style={{ color: "#ff813a" }}>Intermediate</div>
                        <div className="info">
                            <h2>Intermediate</h2>
                            <p> Must-take for students learning Beginner course</p>
                            <button> Contact now </button>
                        </div>
                    </Card>
                    <Card>
                        <Image src="/courses/course-item3.jpg" alt="" width={400} height={400} />
                        <div className="absolute top-2.5 font-bold text-2xl underline underline-offset-4 hover-0" style={{ color: "#ff4242" }}>Advanced</div>
                        <div className="info">
                            <h2>Advanced</h2>
                            <p> Must-take for students learning Intermediate course</p>
                            <button> Contact now </button>
                        </div>
                    </Card>
                </Wrapper>
            </ div >

            <div>

            </div>
        </div >
    );
};

CoursesPage.propTypes = {

};

export default CoursesPage;