// Set up the router outlets
// Looking at our diagram and at our routes as written in the routing module, 
// we can see that both the Product Component and the Review Component should 
// have a <router-outlet></router-outlet> in their html.



// app-routing.module.ts

const routes: Routes = [
    { path: 'products', component: ProductComponent, children: [
        { path: 'details/:id', component: ProductDetailComponent },
        { path: 'brand/:brand', component: BrandComponent },
        { path: 'category/:cat', component: CategoryComponent }]
    },
    { path: 'reviews', component: ReviewComponent, children: [
        { path: 'details/:id', component: ReviewDetailComponent },
        { path: 'author/:id', component: AuthorComponent },
        { path: 'all/:id', component: AllreviewsComponent }]
    }
]

// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// product.component.html

<!-- notice the lack of a slash in front of 'details' -->
<!-- without the slash, details/5 will be appended to our existing route, which is /products -->
<a [routerLink] = "['details', 5]"> Go to /products/details/5 </a>

// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// review.component.html

<!-- notice the slash in front of 'products' -->
<!-- without the slash, products/details/5 would be appended to our existing route, resulting in 
reviews/products/details/5, which we would not be able to handle with our routes written as they are now -->
<a [routerLink] = "['/products', 'details', 5]"> Go to /products/details/5 </a>  

// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// sale.component.ts

export class SaleComponent implements OnInit {
    constructor(private _route: ActivatedRoute){}
    ngOnInit(){
         // note the use of .parent
        this._route.parent.params.subscribe(params => console.log(`The parent params: ${params}`))
    }
}
