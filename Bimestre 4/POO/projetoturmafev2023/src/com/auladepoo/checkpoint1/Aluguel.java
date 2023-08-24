package com.auladepoo.checkpoint1;

import java.time.LocalDate;

public class Aluguel {
    private int idAluguel;
    private Copia copia;
    private Cliente cliente;
    private Funcionario Funcionario;
    private LocalDate dataAluguel;
    private LocalDate dataDevolucao;
    private LocalDate dataDevolvido;
    private double taxaAtraso;

    public Rent(int idAluguel, Copia copia, Cliente cliente, Funcionario funcionario, LocalDate dataAluguel, LocalDate dataDevolucao, LocalDate dataDevolvido, double taxaAtraso) {
        this.idAluguel = idAluguel;
        this.copia = copia;
        this.cliente = cliente;
        this.Funcionario = Funcionario;
        this.dataAluguel = dataAluguel;
        this.dataDevolucao = dataDevolucao;
        this.dataDevolvido = dataDevolvido;
        this.taxaAtraso = taxaAtraso;
    }

    // getters and setters
    public int getidAluguel() {
        return idAluguel;
    }

    public void setidAluguel(int idAluguel) {
        this.idAluguel = idAluguel;
    }

    public Copia getcopia() {
        return Copia;
    }

    public void setcopia(Copia copia) {
        this.Copia = copia;
    }

    public Cliente getcliente() {
        return Cliente;
    }

    public void setcliente(Cliente cliente) {
        this.Cliente = cliente;
    }

    public Funcionario getFuncionario() {
        return Funcionario;
    }

    public void setFuncionario(Funcionario Funcionario) {
        this.Funcionario = Funcionario;
    }

    public LocalDate getdataAluguel() {
        return dataAluguel;
    }

    public void setdataAluguel(LocalDate dataAluguel) {
        this.dataAluguel = dataAluguel;
    }

    public LocalDate getdataDevolucao() {
        return dataDevolucao;
    }

    public void setdataDevolucao(LocalDate dataDevolucao) {
        this.dataDevolucao = dataDevolucao;
    }

    public LocalDate getdataDevolvido() {
        return dataDevolvido;
    }

    public void setdataDevolvido(LocalDate dataDevolvido) {
        this.dataDevolvido = dataDevolvido;
    }

    public double gettaxaAtraso() {
        return taxaAtraso;
    }

    public void settaxaAtraso(double taxaAtraso) {
        this.taxaAtraso = taxaAtraso;
    }
}