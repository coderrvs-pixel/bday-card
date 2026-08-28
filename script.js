@import url('https://googleapis.com');

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    /* Swapped from neon blue to birthday cake pink gradient */
    background: linear-gradient(#ffccd5, #ffb3c1);
    overflow: hidden;
}

#noButton {
    position: absolute;
    margin-left: 150px;
    transition: 0.5s;
    margin-top: 30px;
}

#yesButton {
    position: absolute;
    margin-right: 150px;
    margin-top: 30px;
}

.header_text {
    font-family: "Nunito", sans-serif;
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #ff4a75; /* Strawberry frosting pink accent text */
}

.text {
    font-family: "Nunito", sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 0px;
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
    position: relative; /* Secures absolute child buttons bounds */
}

.btn {
    /* Cake theme frosting base color palette */
    background-color: #ff4a75;
    color: white;
    font-weight: 700;
    font-family: "Nunito", sans-serif;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border: none;
    border-radius: 20px; /* Bubbly rounded aesthetic */
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.15s ease-out;
    box-shadow: 0 4px 10px rgba(255, 74, 117, 0.3);
}

.btn:hover {
    background-color: #ffffff;
    color: #ff4a75;
}

.gif_container {
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    color: #ff4a75;
    text-align: center;
    margin-top: 15px;
}

p a {
    color: #ff4a75;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    font-weight: 600;
    opacity: 0.5;
    text-decoration: none;
}

p a:hover {
    opacity: 1;
}
