#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

const char* ssid = "mickey"; // remplacer par le SSID de votre WiFi
const char* password = "regardesouslabox"; // remplacer par le mot de passe de votre WiFi
ESP8266WebServer server(80); // on instancie un serveur ecoutant sur le port 80

void setup(void){
    Serial.begin(115200);
    WiFi.begin(ssid, password);
    Serial.println("");
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    server.on("/bonjour", [](){
        server.send(200, "text/plain", "hello !");
    });
    server.begin();
}

void loop(void){
    server.handleClient();
}
