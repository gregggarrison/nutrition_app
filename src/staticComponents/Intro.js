import React from 'react'
import Recipes from './Recipes'

function Intro() {
    return (
        <>
            <div className="row mb-2">
                <div className="col-md-4">
                    <div className="text-left">
                        <img
                            src="https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/s960x960/38821387_10215833441525008_5353127816168734720_o.jpg?_nc_cat=101&_nc_sid=dd7718&_nc_ohc=siB9ZBEaZfoAX9GIAnQ&_nc_ht=scontent.fapa1-1.fna&_nc_tp=7&oh=4b201a6cb0083b81ce50b8f9fdd4449a&oe=5F1FC8FA"
                            className="rounded" alt="..."
                        ></img>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="about-me">
                        <h2 className="intro">About Me</h2>
                        <p className="intro">
                            My name is Erica and I have the best brother in the entire world! I should be a better
                            sister and provide said favorite brother with some actual content so he doesn't have to make up filler shit like
                            an asshole! Something inappropriate! Blah Blah Blah.  I'm only 5' tall and cannot get on all the rides at 6 flags.
                        </p>

                        <h4>Hobbies include:</h4>
                        <li>Secondhand smoke!</li>
                        <li>I have the worst laugh in the world! </li>
                        <li>I didn't know how to order a pizza until I was 24! </li>
                        <li>Going #3 with the door open. </li>
                        <li>Beef jerky.</li>
                        <li>Did I mention Play Doh?</li>
                    </div>
                </div>
            </div>
            <Recipes />
        </>
    )
}


export default Intro