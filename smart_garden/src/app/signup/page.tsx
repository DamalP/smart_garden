"use client";
import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import loginBackgroundImage from "@/utility/images/login_background_image.jpg";
import formCover from "@/utility/images/form_cover.png";
// import {axios} from "axios";

export default function SignupPage() {

    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async () => {

    }

    return (
        <div className="signup-background flex flex-col items-center justify-center min-h-screen py-2"
             style={{backgroundImage: `url(${loginBackgroundImage.src})`}}>
            <div className="signupForm grid lg:grid-cols-2">
                <div className="form-cover w-full" style={{backgroundImage: `url(${formCover.src})`}}>
                    <h2>Welcome to <br/>
                        Smart Garden!</h2>
                    <p>To keep connected with us <br className="line-breaker"/>
                        please login with your personal <br className="line-breaker"/>
                        information</p>
                    <button type="submit">Login</button>
                </div>
                <div className="form-content w-full">
                    <form className="flex">
                        <label className="inline-grid w-full">
                            <h2>Sign Up Now</h2>
                            <p>To keep connected with us please sign up with your personal information</p>

                            <div className="grid lg:grid-cols-2 gap-3 name-inputs">
                                <input type="text" className="mt-5" placeholder="first name"/>
                                <input type="text" className="mt-5" placeholder="last name"/>
                            </div>

                            <input type="email" className="mt-5" placeholder="youremail@email.com"/>

                            <div className="grid lg:grid-cols-2 gap-3 password-inputs">
                                <input type="password" className="mt-5" placeholder="password"/>
                                <input type="password" className="mt-5" placeholder="confirm password"/>
                            </div>

                            <div className="flex items-center mt-5 link-area relative">
                                <div className="remind-password absolute left-0">
                                    <input id="remind-password" type="checkbox" value="" className="check-box"/>
                                    <label htmlFor="remind-password" className="check-box-text">Remind my
                                        password</label>
                                </div>
                            </div>
                            <button className="mt-8 transition duration-700" type="submit">Sign Up</button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}