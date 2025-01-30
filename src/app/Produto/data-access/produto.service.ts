import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { produto } from "../../shared/Interfaces/produto.interface";

@Injectable({providedIn: 'root'})
export class produtoService extends BaseHttpService{


    getProduto(page: number): Observable<produto[]> {
        return this.http.get<any[]>(`${this.apiUrl}/products`, {
            params: {
                limit: page * 5,
            }
        });

    }

}