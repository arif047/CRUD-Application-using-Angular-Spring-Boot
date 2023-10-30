import { Component, OnInit } from '@angular/core';
import { model3 } from "../../Todo";
import { VendorService } from "../../vendor.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  variable = "This is initial";
  foundIndex: number | null = null; // Initialize foundIndex in the constructor
  vars1: model3[];
  vars: model3[];
  modelNew: model3 = new model3();
  localItem : string;
  vendorModel: model3 = new model3();
  currentIndex: number;
  isEdit = false;

  constructor(private vendorService: VendorService){
    this.vars =[];
    this.localItem = localStorage.getItem("key") ?? "";
    if(this.localItem==""){
      this.vars =[];
    }
    else{
      this.vars =JSON.parse(this.localItem);
    }
    setTimeout(() => {
      this.variable = "This is after Time-Out";
    }, 3000);
  }
  ngOnInit(): void {
    
  }
  // saveVendor(){
  //   this.vendorService.createVendor(this.vendorModel).subscribe(data=>{
  //     console.log();
  //   })
  // }
  // const foundIndex;
  
  // Addtodo(addObject: model3){
  //   this.modelNew.vendorId = addObject.vendorId;
  //   this.modelNew.vendorName = addObject.vendorName;
  //   this.modelNew.vendorAddress = addObject.vendorAddress;
  //   this.modelNew.vendorPhoneNumber = addObject.vendorPhoneNumber;
  //   this.modelNew.websiteAddress = addObject.websiteAddress;
  //   console.log("addObject has been trsnsfered to addNewObject");
  //    this.vars.push(addObject);
  //    localStorage.setItem("key", JSON.stringify(this.vars));
  // }


  addtodo(){
    if(this.isEdit) {
      this.vars[this.currentIndex].vendorAddress = this.vendorModel.vendorAddress;
      this.vars[this.currentIndex].vendorPhoneNumber = this.vendorModel.vendorPhoneNumber;
      this.vars[this.currentIndex].vendorId = this.vendorModel.vendorId;
      this.vars[this.currentIndex].vendorName = this.vendorModel.vendorName;
      this.vars[this.currentIndex].websiteAddress = this.vendorModel.websiteAddress;
    } else {
      this.vars.push(this.vendorModel);
      this.vendorService.createVendor(this.vendorModel).subscribe(data=>{
        console.log("This is my DATA", data);
      })
    }
    localStorage.setItem("key", JSON.stringify(this.vars));
    this.vendorModel = new model3();
 }

  editTodo(editObject: model3, index: any){
    this.currentIndex = index;
    this.isEdit = true;
    console.log(index);
    
    this.vendorModel.vendorAddress = editObject.vendorAddress;
    this.vendorModel.vendorName = editObject.vendorName;
    this.vendorModel.vendorId = editObject.vendorId;
    this.vendorModel.websiteAddress = editObject.websiteAddress;
    this.vendorModel.vendorPhoneNumber = editObject.vendorPhoneNumber;   
  }

  deleteTodo(vendor : model3){
    this.foundIndex = this.vars.indexOf(vendor);
    this.vars.splice(this.foundIndex,1);
    localStorage.setItem("key", JSON.stringify(this.vars));
    console.log(vendor)
    }


  onClick2(model4: model3)
  {
    console.log("todoEdit function has been triggered")    
  }
}
