import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
nombre: string;
creditos: number;
}
@Component({
selector: 'app-root',
imports: [CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
nombre = 'Juan';
titulo = 'Mini-LMS · Lista de estudiantes';
estudiantes: Estudiante[] = [
{ nombre: 'María Torres', creditos: 18 },
{ nombre: 'Luis Pérez', creditos: 8 },
{ nombre: 'Ana Ruiz', creditos: 14 }
];
// Misma regla de matrícula de la Unidad 1, ahora como método del componente.
estado(creditos: number): string {
if (creditos < 1 || creditos > 24) {
return 'Créditos inválidos';
} else if (creditos >= 12) {
return 'Matriculado';
}
return 'Pendiente';
}
}