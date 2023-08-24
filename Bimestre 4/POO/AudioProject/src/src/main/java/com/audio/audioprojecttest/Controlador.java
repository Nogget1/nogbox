package com.audio.audioprojecttest;

import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.control.ToggleButton;

import javax.sound.sampled.*;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;

import java.awt.event.ActionEvent;

public class Controlador {
    @FXML
    private Label checkRecord;
    @FXML
    private Label estadoGravacao;
    @FXML
    private Label tituloGravacao;
    @FXML
    private Button enviarTitulo;
    @FXML
    private TextField escrevaTitulo;
    @FXML
    private ToggleButton radioButton;

    public Controlador() throws LineUnavailableException {
    }


    @FXML
    protected void onButtonClick() {
        if (!tituloGravacao.getText().isEmpty()) { // verifica se o título foi preenchido
            radioButton.setDisable(false);
            if (radioButton.isSelected()) {
                estadoGravacao.setText("Está gravando!");
                radioButton.setSelected(true);
                String fileName = tituloGravacao.getText();
                AudioRecorder file = new AudioRecorder(fileName);

                Thread recordingThread = new Thread(() -> {
                    file.startRecording();
                    while (radioButton.isSelected()) {
                        try {
                            Thread.sleep(100);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    file.stopRecording();
                });

                recordingThread.start();

            } else {
                estadoGravacao.setText("Não está gravando!");
                radioButton.setSelected(false);
            }

        } else {
            estadoGravacao.setText("Escolha o seu título antes de começar a gravar");
        }
    }    @FXML
   //botão de gravação


    public void recordingTitle(javafx.event.ActionEvent actionEvent) {
        String titulo = escrevaTitulo.getText();
        radioButton.setDisable(false);
        tituloGravacao.setDisable(false);
        tituloGravacao.setText(titulo);
    }
}