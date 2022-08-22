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
- [8 What is TypeScript and why it is used?](#what-is-typescript-and-why-it-is-used)
- [9 What is Components?](#what-is-components)
- [10 What Is Angular?](#what-is-angular)
- [11 What are the core building block of angular](#what-are-the-core-building-block-of-angular)
- [12 Difference between Angular and AngularJS](#difference-between-angular-and-angularjs)
- [13 What are templates in Angular](#what-are-templates-in-angular)
- [14 What Is property binding in angular ?](#what-is-property-binding-in-angular)
- [15 What is the difference between properties and attributes in HTML?](#what-is-the-difference-between-properties-and-attributes-in-html)
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

8. ### What is TypeScript and why it is used?

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

9. ### What is Components?

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

10. ### What Is Angular?

Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with. It enables users to create large applications in a maintainable manner.

11. ### What are the core building block of angular

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

12. ### Difference between Angular and AngularJS

Difference between the AngularJS & Angular: Although, there are significant key differences between Angular JS & Angular:

| AngularJS                                     | Angular                                                                           |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| It supports the Model-View-Controller design. | It uses components and directives. Components are the directives with a template. |
| Written in JavaScript                         | Written in TypeScript                                                             |
| Not a mobile friendly framework               | Angular is supported by all the popular mobile browsers.                          |
| It does not use Dependency Injection.         | It support Dependency Injection.                                                  |

13. ### What are templates in Angular

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

14. ### What Is property binding in angular ?

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

15. ### What is the difference between properties and attributes in HTML?

When writing HTML source code, you can define attributes on your HTML elements. Then, once the browser parses your code, a corresponding DOM node will be created. This node is an object, and therefore it has properties.

For instance, this HTML element:

```html
<input type="text" name="name" />
```

Has 2 attributes `(type and value)`.
Once the browser parses this code, a HTMLInputElement object will be created, and this object will contain dozens of properties like: accept, accessKey, align, alt, attributes, autofocus, baseURI, checked, childElementCount, childNodes, children, classList, className, clientHeight, etc.

