//int red =4;
//int yellow = 5;
//int green = 6;
unsigned int redDelay = 3000;
unsigned int yellowDelay =5000;
unsigned int greenDelay = 3000;
bool isRed =1;
bool isYellow =0;
bool isGreen =0;
int n =0;
unsigned int ccurrentTime=0;
unsigned long  startTime ;

void setup()
{
  //pinMode(red,OUTPUT);
  DDRD |=(1<<PD4);
  //pinMode(green,OUTPUT);
  DDRD |=(1<<PD5);
  //pinMode(yellow,OUTPUT);
  DDRD |=(1<<PD6);
  startTime = millis();
  Serial.begin(9600);
}

void loop()
{
  
   if(isRed)
   {
     //digitalWrite(red,HIGH);
     PORTD |=(1<<PD4);
     if((millis()-startTime)>redDelay)
     {
      //digitalWrite(red,LOW);
       PORTD &= ~(1<<PD4);
       isRed =0;
       isYellow =1;
       startTime =millis();
     }
   }
     else if(isYellow)
     {
      //digitalWrite(yellow,HIGH);
       PORTD |= (1<<PD5);
       if((millis()-startTime)>yellowDelay)
       {
         //digitalWrite(yellow,LOW);
         PORTD &= ~(1<<PD5);
         isYellow = 0;
         isGreen = 1;
         startTime =millis();
       }
     }
     else if(isGreen)
     {
      //digitalWrite(green,HIGH);
       PORTD |= (1<<PD6);
       if((millis()-startTime)>greenDelay)
       {
       //digitalWrite(green,LOW);
         PORTD &= ~(1<<PD6);
         isGreen =0;
         isRed =1;
         startTime = millis();
       }
     }
   }
 