import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { Button } from "tns-core-modules/ui/button";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;
    picklist:Array<string>;
    
    
    

    constructor(private _itemService: DataService) { 
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        this.picklist=["MF"];
        const Button = require("tns-core-modules/ui/button").Button;
    }

    
}
