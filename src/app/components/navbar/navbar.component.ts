import { Component } from '@angular/core';
import { Subcategorias } from 'src/app/interfaces/subcategorias';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SubcategoriasService } from 'src/app/services/subcategorias.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  subcategoria: Subcategorias[] = [];
  admin?:boolean;

  constructor(private adminsvc:DashboardService,private subcategorias: SubcategoriasService) { 
    this.admin=this.adminsvc.getAdmin;

  }

  ngOnInit() {
    this.admin=this.adminsvc.getAdmin;

    this.subcategorias.getSubcategorias().subscribe(subcategoria => {
      this.subcategoria = subcategoria;
    })
  }

  async onClickDelete(registro: Subcategorias) {
    const response = await this.subcategorias.deleteSubcategorias(registro);
    console.log(response);

  }
  async onClickUpdate(registro: Subcategorias) {
    const response = await this.subcategorias.updateSubcategorias(registro);
    console.log(response);

  }

}