import React from 'react'

 //functional component
 function User(){
    return (
        <div className="User">
        <h1> React project</h1>
            <form id="form" action="/">
            <h1>Sign Up</h1>
            <div class="input-control">
                <label for="username">StudentId</label>
                <input id="username" name="username" type="text"/>
                <div class="error"></div>
           </div>
            <div class="input-control">
                <label for="email">StudentName</label>
                <input id="email" name="email" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="college">College</label>
                <input id="college"name="college" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="date">Date</label>
                <input id="date"name="date" type="date"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="qualification">Qualification</label>
                <input id="date"name="date" type="date"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="date">Date</label>
                <input id="date"name="date" type="date"/>
                <div class="error"></div>
                </div>

            <button type="submit">Submit</button>
        </form>
        </div>
    );
 }
 export default User;