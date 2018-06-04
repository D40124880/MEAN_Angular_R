// inside app.components.ts

import { Component, OnInit } from '@angular/core';
// implement OnInit.
export class AppComponent implements OnInit{
    constructor(private _httpService: HttpService) {}
    // ng OnInit will run when the component is initialized, after the constructor method.
    ngOnInit() {
        this.getTasksFromService();
    }
    getTasksService(){
        this._httpService.getTasks();
    }
}
// ------- - - - - - - -- - - -- - - - -  -  - - - -- -  - - - --/ -/ -/ - //- -/  /-/-/ -/ -/
// inside http.service.ts

getTasks(){
    return this._http.get('/tasks');
}

// ------- - - - - - - -- - - -- - - - -  -  - - - -- -  - - - --/ -/ -/ - //- -/  /-/-/ -/ -/
// inside app.components.ts

gettasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => console.log("Got our tasks!", data));
}

// ------- - - - - - - -- - - -- - - - -  -  - - - -- -  - - - --/ -/ -/ - //- -/  /-/-/ -/ -/
// inside app.components.ts

export class AppComponent implements OnInit {
    // set the attribute tasks to be an array.
    tasks = [];
    getTasksFromService(){
        let observable = this._httpService.getTasks();
        observable.subscribe(data => {
            console.log("Got our tasks!", data)
            // in this example, the array of tasks is assigned to the key 'tasks' in the data object
            // this may be different for you, depending on how you set up your Task API
            this.tasks = data['tasks'];
        })
    }
}