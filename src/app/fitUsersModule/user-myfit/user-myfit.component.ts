import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import { EditUserDetailsDialogComponent } from '../edit-user-details-dialog/edit-user-details-dialog.component';

@Component({
  selector: 'app-user-myfit',
  templateUrl: './user-myfit.component.html',
  styleUrls: ['./user-myfit.component.css']
})
export class UserMyfitComponent implements OnInit {

  @Input()
  user: User;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private location: Location,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  editUser() {
    // Show Dialog
    const dialogRef = this.dialog.open(EditUserDetailsDialogComponent, {
      width: '650px', data: { 
        add: false,
        myfit: true,
        user: {...this.user},
      }
    });

    // Save Dialog Results
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.user.username = result.user.username;
        this.user.firstName = result.user.firstName;
        this.user.lastName = result.user.lastName;
        this.user.gender = result.user.gender;
        this.user.address = result.user.address;
        this.user.city = result.user.city;
        this.user.zipcode = result.user.zipcode;
        this.user.mobile = result.user.mobile;
        this.user.email = result.user.email;
        this.user.birthDate = result.user.birthDate;
        this.user.height = result.user.height;                    
        this.user.name = this.getName(this.user);
        this.usersService.updateUser(this.user).subscribe(); 
      }

    }); 
  }

  public getName(user: User): string {

    let name = '';

    if (user.firstName) {
      name = user.firstName + " ";
    }

    if (user.lastName) {
      name = name + user.lastName;
    }

    if (name.length == 0 && user.username) {
      name = user.username;
    }

    if (name.length == 0) {
      name = "User id=" + user.id;
    }

    return name;
  }
}
