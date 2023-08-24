module com.audio.audioprojecttest {
    requires javafx.controls;
    requires javafx.fxml;

    requires com.dlsc.formsfx;
    requires java.desktop;
    requires javafx.media;

    opens com.audio.audioprojecttest to javafx.fxml;
    exports com.audio.audioprojecttest;
}