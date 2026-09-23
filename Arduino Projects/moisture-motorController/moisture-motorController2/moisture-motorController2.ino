int sensorPin = A1;
int motorPin = 6;
const unsigned long  motorDelay =500;
unsigned long startTime =0;
bool motorRunning =false;
const unsigned long loopDelay = 10000;

void setup()
{
    DDRD|=(1<<PD6);
    DDRC&= ~(0<<PC1);
    Serial.begin(9600);
}

void loop()
{   millis();
    int value = analogRead(sensorPin);
    Serial.print("sensor value:");
    Serial.println(value);
   
  // motor controller
 
 if(value>400 && value<600 && !motorRunning)
 {
     PORTD|=(1<<PD6);
     
    startTime = millis();
    
     motorRunning =true;
    
     Serial.println("motor on");
       
 }
 
 if(motorRunning &&((millis()-startTime)>=motorDelay))
 {   
   PORTD&= ~(1<<PD6);
   
   motorRunning = false;
   
   Serial.println("motorOFF");
   
 }
 

 
}
