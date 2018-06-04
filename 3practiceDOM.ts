// app.component.html

<button (click)="onButtonClick()" >Click me!</button>
<button (click)="onButtonClickParam(5)">Click me!</button>
<button (click)="onButtonClickParams(5, 'hello')">Click me!</button>
<button (click)="onButtonClickEvent($event)">Click me!</button>


// ----/---/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//

// app.component.ts

onButtonClick(): void { 
    console.log(`Click event is working`);
}

onButtonClickParam(num: Number): void { 
    console.log(`Click event is working with num param: ${num}`);
}

onButtonClickParams(num: Number, str: String): void { 
    console.log(`Click event is working with num param: ${num} and str param: ${str}`);
}

onButtonClickEvent(event: any): void { 
    console.log(`Click event is working with event: ${event}`);
}
