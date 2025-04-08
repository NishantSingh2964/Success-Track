import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://media.istockphoto.com/id/1337746843/vector/office-at-home.jpg?s=612x612&w=0&k=20&c=TeEy-wPJ8QHDR7zrSOCwyomzyfxsIEtdshh5Y8B2ETA="
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Guiding You Toward a Brighter Future, One Step at a Time!
                        </h2>
                        <p className="mt-6 text-gray-600">
                            At SuccessTrack, we believe every career journey is unique, and with the right guidance, anyone can unlock their full potential. Whether you're exploring new job opportunities, sharpening your skills, or striving for professional growth, we are here to help you navigate the ever-changing world of work with clarity and confidence.

                        </p>
                        <p className="mt-4 text-gray-600">
                        Our platform is designed to empower individuals with expert advice, personalized career planning, and actionable insights that pave the way for lasting success. From resume building to interview preparation, industry trends to skill development, SuccessTrack is your ultimate companion in crafting a fulfilling career path.
                        With the right strategy, ambition, and support, your dream career is within reach. Let SuccessTrack be your trusted guide on the road to success! 🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
