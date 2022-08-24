# Frequently Asked Angular Interview Questions 
 ### Resources 
- [Angular Documentations](https://angular.io/) 
 

 ## Table of Contents

- [1 Why Angular?](#why-angular)
- [2 What are the directives ?](#what-are-the-directives)
- [3 What are the order of angular lifecycle hooks execution ?](#what-are-the-order-of-angular-lifecycle-hooks-execution)
- [4 What is lifecycle hooks ?](#what-is-lifecycle-hooks)
- [5 What is change detection ?](#what-is-change-detection)
- [6 What is the use of ngOnChanges?](#what-is-the-use-of-ngonchanges)
- [7 Difference between Constructor and ngOnInit ?](#difference-between-constructor-and-ngoninit)
- [8 What is the use of app root in Angular?](#what-is-the-use-of-app-root-in-angular)
- [9 What is Ahead of Time (AOT) compiler ?](#what-is-ahead-of-time-aot-compiler)
- [10 What is the Just in Time (JIT) compiler ?](#what-is-the-just-in-time-jit-compiler)
- [11 What is the entry point of Angular application?](#what-is-the-entry-point-of-angular-application)
- [12 What is TypeScript and why it is used?](#what-is-typescript-and-why-it-is-used)
- [13 What is destroy in Angular?](#what-is-destroy-in-angular)
- [14 What does bootstrapping in Angular mean?](#what-does-bootstrapping-in-angular-mean)
- [15 What is NgModule ?](#what-is-ngmodule)
- [16 What are exports in NgModule?](#what-are-exports-in-ngmodule)
- [17 What are imports in NgModule?](#what-are-imports-in-ngmodule)
- [18 What is  declaration in Angular Module ?](#what-is-declaration-in-angular-module)
- [19 What is angular markup ?](#what-is-angular-markup)
- [20 What is providers in angular ?](#what-is-providers-in-angular)
- [21 What is injector in angular ?](#what-is-injector-in-angular)
- [22 How angular injector works ?](#how-angular-injector-works)
- [23 What is Components?](#what-is-components)
- [24 When is Angular Injector is created ?](#when-is-angular-injector-is-created)
- [25 What Is Angular?](#what-is-angular)
- [26 What are the core building block of angular](#what-are-the-core-building-block-of-angular)
- [27 Difference between Angular and AngularJS](#difference-between-angular-and-angularjs)
- [28 What are templates in Angular](#what-are-templates-in-angular)
- [29 What Is property binding in angular ?](#what-is-property-binding-in-angular)
- [30 What is the difference between properties and attributes in HTML?](#what-is-the-difference-between-properties-and-attributes-in-html)
<br/><br/><br/><br/>

1. ### Why Angular?

JavaScript is the most commonly used client-side scripting language. It is written into HTML documents to enable interactions with web pages in many unique ways. As a relatively easy-to-learn language with pervasive support, it is well-suited to develop modern applications. But is JavaScript ideal for developing single-page applications that require modularity, testability, and developer productivity? Perhaps not. These days, we have a variety of frameworks and libraries designed to provide alternative solutions. With respect to front-end web development, Angular addresses many, if not all, of the issues developers face when using JavaScript on its own.

Angular Provide a collection of integrated libraries that cover a wide variety of features, including: routing forms management client server communication and more. Angular is designed to make updating as straightforward as possible so take advantage of the latest features development tools and libraries.

2. ### What are the directives ?

Directives are classes that add new behavior or modify the existing behavior to the elements in the template. Basically directives are used to manipulate the DOM, for example adding/removing the element from DOM or changing the appearance of the DOM elements.

**Example of Angular directive**

```ts
@Component({
	selector: 'my-app',
	template: `
		<ul>
			<li *ngFor="let name of names">
				{{ name }}
			</li>
		</ul>
	`,
})
export class AppComponent {
	names: string[]
	constructor() {
		this.names = ['John', 'Mary', 'Mike']
	}
}
```

In this above code, the `*ngFor` directive is used to iterate over the names array and display the names in the template.

3. ### What are the order of angular lifecycle hooks execution ?

Angular gives us 8 hooks to allow us to tap into the lifecycle of our components and trigger actions at specific points in the lifecycle.

Here are the lifecycle hooks available , in the order which they are invoked:

1. ngOnChanges
2. ngOnInit
3. ngDoCheck
4. ngAfterContentInit
5. ngAfterContentChecked
6. ngAfterViewInit
7. ngAfterViewChecked
8. ngOnDestroy

**ngOnChanges** Called every time a data-bound input property changes. It’s called a first time before the ngOnInit hook. The hook receives a SimpleChanges object that contains the previous and current values for the data-bound inputs properties. This hook gets called often, so it’s a good idea to limit the amount of processing it does.

**ngOnInit** Called once upon initialization of the component.

**ngDoCheck** Use this hook instead of ngOnChanges for changes that Angular doesn’t detect. It gets called at every change detection cycle, so keeping what it does to a minimum is important for performance.

**ngAfterContentInit** Called after content is projected in the component.

**ngAfterContentChecked** Called after the projected content is checked.

**ngAfterViewInit** Called after a component’s view or child view is initialized.

**ngAfterViewChecked** Called after a component’s view or child view is checked.

**ngOnDestroy** Called once when the component is destroyed and a good hook to use to cleanup and unsubscribe from observables.

4. ### What is lifecycle hooks ?

The lifecycle of a component/directive is managed by Angular as it creates, checks, updates, renders, and destroys. To have a view of all these occurrences and respond to these moments, Angular provides lifecycle hooks that give us visibility into these. These lifecycle hooks can be implemented by the interfaces provided in the Angular Core Library. This is the same with components and directives. Every interface contains different lifecycle hook methods, named with the interface name prefixed with ng. Like the very commonly used lifecycle hook ngOnInit() is named as ng(prefix) and OnInit (interface name).

5. ### What is change detection ?

Change detection is the process through which angular checks to see whether your applications state has changed, and if any DOM needs to be update.

6. ### What is the use of ngOnChanges?

`ngOnChanges` triggers following the modification of @Input bound class members. Data bound by the @Input() decorator come from an external source. When the external source alters that data in a detectable manner, it passes through the @Input property again.

The ngOnChanges hook, with it’s SimpleChanges object, is a little different. Here’s how you would implement it. Let’s say we have a component used like this:

```html
<my-todo [title]="title" [content]="content"></my-todo>
```

Now say that we want to do something when the title property changes:

```ts
@Component({
	selector: 'my-todo',
	templateUrl: './my-todo.component.html',
	styleUrls: ['./my-todo.component.css'],
})
export class MyTodoComponent implements OnChanges {
	@Input() title: string
	@Input() content: string
	constructor() {}
}
```

7. ### Difference between Constructor and ngOnInit ?

The Constructor is a default method of the class that is executed when the class is instantiated and ensures proper initialisation of fields in the class and its subclasses. Angular, or better Dependency Injector (DI), analyses the constructor parameters and when it creates a new instance by calling new MyClass() it tries to find providers that match the types of the constructor parameters, resolves them and passes them to the constructor.

ngOnInit is a life cycle hook called by Angular to indicate that Angular is done creating the component.

8. ### What is the use of app root in Angular?

The root app module is just the beginning. It is a necessary part of any Angular app, but it is also just the entry point to the rest of your app's feature modules.

9. ### What is Ahead of Time (AOT) compiler ?

when you serve/build your angular application, the Ahead of Time compiler converts your code during the build time before your browser downloads and runs that code. From Angular 9, by default compiling option is set to true for ahead of time compiler.

10. ### What is the Just in Time (JIT) compiler ?

Just in time compiler provides compilation during the execution of the program at a run time before execution. In simple words, code get compiles when it’s needed, not at the build time. Initially, compiler was responsible for converting a high-level language into machine language, which would then be converted into executable code.
Just in time compiler, compiles code at runtime which means instead of interpreting byte code at build time, it will compile byte code when that component is called

11. ### What is the entry point of Angular application?

A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap process (application launch). Other entry components are loaded dynamically by other means, such as with the router. Angular loads a root AppComponent dynamically because it's listed by type in @NgModule. bootstrap .

12. ### What is TypeScript and why it is used?

TypeScript is a programming language first developed by Microsoft in 2012. Its main ambition is to improve the productivity of developing complex applications.
It is an open-source language developed as a superset of JavaScript. What this means in simple terms is that any code valid in JavaScript is also valuable for TypeScript.

### Example

**Without typescript**

```js
var x = 1
var y = 2
```

**With typescript**

```ts
var x: number = 1
var y: number = 2
```

13. ### What is destroy in Angular?

A lifecycle hook that is called when a directive, pipe, or component is destroyed. The ngOnDestroy or OnDestroy hook is called just before the Component/Directive instance is destroyed by Angular. Use this hook to Perform any cleanup logic for the Component. This is the correct place where you would like to Unsubscribe Observables and detach event handlers to avoid memory leaks.

14. ### What does bootstrapping in Angular mean?

Angular bootstrapping is the process of initializing the Angular application. It is the first step in the application's lifecycle. Angular application are mainly bootstrapped from `main.ts` file. This file is the entry point for the application and is responsible for bootstrapping the application.

15. ### What is NgModule ?

NgModule is kind of a manager for the application. It is responsible for registering all the components, directives, pipes, etc. that are part of this module context. A application can have multiple modules. Each module is responsible for registering its own components, directives, pipes, etc. The core module imports all the other modules.

**Example:**

```typescript
@NgModule({
  declarations: [
    ...
  ],
  imports: [
    BrowserModule,
    ...
  ],
  providers: [
    ...
  ],
})
export class ExampleModule { }
```

**Note:** NgModule is a class that can be used to group components, directives, and pipes into an application and provide additional configuration options to those components.

16. ### What are exports in NgModule?

When we went to share some feature with another module, we declare it in the exports array of the NgModule. This can be used in the other module to import the feature.

**Parent module:**

```typescript
@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})

export class ParentModule { }
```

We export the button component from the parent module. So now other modules can use this button component if they import the parent module.

**Child module:**

```typescript
@NgModule({
  imports: [
    ParentModule,
  ],
})
export class ChildModule { }
```

17. ### What are imports in NgModule?

When we need some feature from another module, We declare it in the imports array of the NgModule. Importing a module is a two-step process. First, we have to export the feature from the module we want to import. Second, we have to import the feature from the module we want to import.

**Parent module:**

```typescript
@NgModule({
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class ParentModule { }
```

**Child module:**

```typescript
@NgModule({
  imports: [
    ParentModule,
  ],
})
export class ChildModule { }
```

The above example first we export the ButtonComponent from the ParentModule and then we import it in the ChildModule. Now we can use the ButtonComponent in the ChildModules anywhere.

18. ### What is  declaration in Angular Module ?

In Angular module, Declaration is a list that contains all the components, directives, pipes, and services that belong to the module.

**Component:**  Component is a UI building block. A component is a self-contained piece of UI that only needs to be built once, and can be used multiple times in other parts of an application.

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

**Directive:**  Directive are classes that contain a custom behavior. A directive is a behavior that can be attached to elements in the DOM.

```typescript
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
```

**Pipe:**  Pipes are a simple way to transform the values in an angular template.

```typescript
@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: string) {
    return value.split('').reverse().join('');
    }
}
```

19. ### What is angular markup ?

Angular markup is a way to write HTML in angular. It is a superset of HTML where we can modify HTML elements before the are displayed. For example, we can add custom attributes `loop` over an array of items and display them in a list `if else` condition etc.

**Example:**

```html
<ul>
  <li *ngFor="let item of items">
    {{item}}
  </li>
</ul>
<p *ngIf="items.length == 0">
  There are no items in the list.
</p>
```

20. ### What is providers in angular ?

Angular has an concept of services and services are used to share data between components and do external works like http requests and database connections. Providers has the all the services listed in the array.

**Note:** Providers are contain only services blueprint not the services instance.

**Example:**

```typescript
@NgModule({
  providers: [
    AuthService,
    UserService,
    AuthGuard
  ]
})
export class AppModule { }
```

21. ### What is injector in angular ?

Injector is a container that holds all the instances of the services. Mainly Responsible for creating the instances of the services and injecting them into the components or services.

22. ### How angular injector works ?

The Injector looks for the dependency in the Angular Providers using the Injection token. The Angular Providers array returns the Provider, which contains the information about how to create the instance of the dependency. The Injector creates the instance and injects it into the Component or service.

23. ### What is Components?

In Angular, Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

- Components are typically custom HTML elements, and each of these elements can instantiate only one component.
- A TypeScript class is used to create a component. This class is then decorated with the `@Component` decorator. The decorator accepts a metadata object that gives information about the component.
- A component must belong to the NgModule in order for it to be usable by another component or application.
- Components control their runtime behavior by implementing Life-Cycle hooks.

**Example of an Component**

```TypeScript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
}
```

24. ### When is Angular Injector is created ?
The angular injector is created when the application is bootstrapped.

25. ### What Is Angular?

Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.

26. ### What are the core building block of angular

The various building blocks of Angular are:

- Components
- Modules
- Directives
- Decorators
- Pipes
- Data Binding
- Templates
- Metadata
- Services
- Dependency Injection

27. ### Difference between Angular and AngularJS

Difference between the AngularJS & Angular: Although, there are significant key differences between Angular JS & Angular:

| AngularJS                                     | Angular                                                                           |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| It supports the Model-View-Controller design. | It uses components and directives. Components are the directives with a template. |
| Written in JavaScript                         | Written in TypeScript                                                             |
| Not a mobile friendly framework               | Angular is supported by all the popular mobile browsers.                          |
| It does not use Dependency Injection.         | It support Dependency Injection.                                                  |

28. ### What are templates in Angular

In Angular, templates are the HTML that is used to render the application. It's responsible for the layout and content and how it is displayed in the UI. Every component has an HTML template that declares how that component renders. You define this template either inline or by file path. Angular extends HTML with additional syntax that lets you insert dynamic values from your component. Angular automatically updates the rendered DOM when your component's state changes.

**Example of a angular template**

```ts
@Component({
	selector: 'my-app',
	template: `
		<h1>Hello {{ name }}</h1>
		<p>This is some content</p>
	`,
})
export class AppComponent {
	name = 'Angular'
}
```

Here name is a property that is bound to the {{ name }} in the template. It's an syntax that is used to insert dynamic values into the template.

29. ### What Is property binding in angular ?

Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.

**Example of Angular property binding**

```ts
@Component({
	selector: 'my-app',
	template: ` <img [src]="imageUrl" /> `,
})
export class AppComponent {
	imageUrl = 'https://picsum.photos/200/300'
}
```

The above code creates an Angular component that displays an image. The image's source is set to the value of the imageUrl property in the DOM node. A target property is the property of the DOM node that is set to the value of the imageUrl property.

30. ### What is the difference between properties and attributes in HTML?

When writing HTML source code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.

For instance, this HTML element:

```html
<input type="text" name="name" />
```

Has 2 attributes `(type and value)`.
Once the browser parses this code, a HTMLInputElement object will be created, and this object will contain dozens of properties like: accept, accessKey, align, alt, attributes, autofocus, baseURI, checked, childElementCount, childNodes, children, classList, className, clientHeight, etc.

