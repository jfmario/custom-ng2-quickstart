
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../lib/auth.service';
import { AuthCheckAbstractComponent } from '../middleware/auth-check.abstract.component';

@Component ({
    selector: 'auth-landing',
    templateUrl: 'app/auth/static/html/landing.component.html'
})
export class LandingComponent extends AuthCheckAbstractComponent {

    constructor ( private authService : AuthService, private router: Router )
    {
        super ( authService, router );
    }
}
