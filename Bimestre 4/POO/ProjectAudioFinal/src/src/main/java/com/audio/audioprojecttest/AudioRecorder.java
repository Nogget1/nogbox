package com.audio.audioprojecttest;
import javafx.application.Application;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.stage.Stage;
import javafx.util.Duration;

import javax.sound.sampled.*;
import java.io.File;

public class AudioRecorder extends Application {
    private static final int SAMPLE_RATE = 44100;
    private static final int BITS_PER_SAMPLE = 16;
    private static final int CHANNELS = 1;

    private AudioFormat audioFormat;
    private TargetDataLine targetDataLine;
    private AudioFileFormat.Type fileType;
    private String fileName;
    private Object Duration;

    public AudioRecorder(String fileName) {
        this.fileName = fileName;
        audioFormat = new AudioFormat(SAMPLE_RATE, BITS_PER_SAMPLE, CHANNELS, true, true);
        fileType = AudioFileFormat.Type.WAVE;
    }

    public void startRecording() {
        try {
            targetDataLine = AudioSystem.getTargetDataLine(audioFormat);
            targetDataLine.open(audioFormat);
            targetDataLine.start();

            AudioInputStream audioInputStream = new AudioInputStream(targetDataLine);
            String workingDir = System.getProperty("user.dir");
            File directory = new File(workingDir + File.separator + "gravações");
            directory.mkdirs(); // Cria o diretório se ele não existir
            File audioFile = new File(directory, fileName + ".wav");
            AudioSystem.write(audioInputStream, fileType, audioFile);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public void stopRecording() {
        targetDataLine.stop();
        targetDataLine.close();
    }

    @Override
    public void start(Stage stage) throws Exception {

    }

    private void playAudio() {
        // Cria um novo objeto MediaPlayer para reproduzir o áudio
        Media audioFile = new Media(new File(fileName + ".wav").toURI().toString());
        MediaPlayer mediaPlayer = new MediaPlayer(audioFile);

        // Define um listener para ser executado quando a reprodução do áudio for concluída
        mediaPlayer.setOnEndOfMedia(() -> {
            // Reinicia a reprodução do áudio
            mediaPlayer.seek((javafx.util.Duration) Duration);
            mediaPlayer.play();
        });

        // Reproduz o áudio
        mediaPlayer.play();
    }
}
