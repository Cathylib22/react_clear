import React, { useEffect, useState } from "react";
//import supabase from "./supabase";

function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}

function NewSubscrib({ setSubscrib, setDataBase }) {
    const [text, setText] = useState("");
    // Fixed in a video text overlay
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const textLength = text.length;

    async function handleSubmit(e) {
        // 1. Prevent browser reload
        e.preventDefault();
        console.log(text, name, email);
    
        // 2. Check if data is valid. If so, create a new fact
        if (text && isValidHttpUrl(name) && email && textLength <= 200) {

            // 3. Upload fact to Supabase and receive the new fact object
            setIsUploading(true);
            /* const { data: newUser, error } = await supabase
                .from("subscribed_users")
                .insert([{ text, name, email }])
                .select(); */
            setIsUploading(false);

            // 4. Add the new fact to the UI: add the fact to state
            //if (!error) setSubscrib((subusers) => [newUser[0], ...subusers]);

            // 5. Reset input fields
            setText("");
            setName("");
            setEmail("");

            // 6. Close the form
            setDataBase(false);
        }
    }

}  
export default function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [advice, setAdvice] = useState("");

    async function getSubmit() {
        // Fetch advice from API
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvice(data.slip.advice);

        // Record user input
        const userInput = {
            name: name,
            email: email,
        };
        console.log("User Input:", userInput);

        // Clear input fields
        setName("");
        setEmail("");
    }

    return (
        <footer className="footer-under">
            <div className="container-width">
                <div className="footer-container">
                    <div className="foot-lists">
                        <div className="foot-list">
                            <div className="foot-list-title">About us</div>
                            <div className="foot-list-item">Contact</div>
                            <div className="foot-list-item">Events</div>
                            <div className="foot-list-item">Company</div>
                            <div className="foot-list-item">Jobs</div>
                            <div className="foot-list-item">Blog</div>
                        </div>
                        <div className="foot-list">
                            <div className="foot-list-title">Services</div>
                            <div className="foot-list-item">Education</div>
                            <div className="foot-list-item">Partner</div>
                            <div className="foot-list-item">Community</div>
                            <div className="foot-list-item">Forum</div>
                            <div className="foot-list-item">Download</div>
                            <div className="foot-list-item">Upgrade</div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="form-sub">
                        <div className="foot-form-cont">
                            <div className="foot-form-title">Subscribe</div>
                            <div className="foot-form-desc">Subscribe to our newsletter to receive exclusive offers and the latest news</div>
                            <input type="text" name="name" placeholder="Name" className="sub-input" onChange={(e) => setName(e.target.value)} />
                            <input type="text" name="email" placeholder="Email" className="sub-input" onChange={(e) => setEmail(e.target.value)} />
                            <button type="button" className="sub-btn" onClick={getSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container-width">
                    <div className="made-with">made with CalcSim</div>
                    <div className="foot-social-btns">facebook twitter linkedin mail</div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </footer>
    );
}
