// src/Documentation.js
import React from "react";
import { DocumentationContainer, InfoCard } from "./HomeElements";

const Documentation = ({ handleDocs }) => {
	return (
		<DocumentationContainer>
			<img
				src="https://stevezafeiriou.com/wp-content/uploads/2024/07/choice-logo.png"
				alt="choice-generation-logo"
			/>
			<h1>Choice: Interactive Sculpture (ESP32S3 Microcontroller)</h1>
			<h2>Overview</h2>
			<p>
				<strong>Firmware Version: v1.0.0</strong>
			</p>
			<p>
				Choice is an interactive sculpture based on an ESP32-S3 microcontroller.
				The sculpture is a mini-game that allows users to create generative
				artworks based on their movement acceleration using real-time data. This
				documentation relates to the firmware for the Choice Sculpture, the
				sculpture is powered by the LilyGo T-Display S3 - ESP32S3 R8 WiFi BLE
				microcontroller. The firmware includes functionalities such as
				accelerometer data processing, button handling, display control, and OTA
				updates via WiFi.
			</p>

			<h2>Table of Contents</h2>
			<ol>
				<li>
					<a href="#hardware-setup">Hardware Setup</a>
				</li>
				<li>
					<a href="#software-components">Software Components</a>
				</li>
				<li>
					<a href="#functionality">Functionality</a>
				</li>
				<li>
					<a href="#generative-art-creation">Generative Art Creation</a>
				</li>
				<li>
					<a href="#compilation-and-deployment">Compilation and Deployment</a>
				</li>
				<li>
					<a href="#ota-firmware-update">OTA Firmware Update</a>
				</li>
				<li>
					<a href="#file-descriptions">File Descriptions</a>
				</li>
				<li>
					<a href="#glossary">Glossary</a>
				</li>
			</ol>

			<h2 id="hardware-setup">Hardware Setup</h2>
			<h3>Pin Configuration</h3>
			<table>
				<thead>
					<tr>
						<th>Component</th>
						<th>Pin</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>I2C SDA</td>
						<td>GPIO17</td>
						<td>I2C Data</td>
					</tr>
					<tr>
						<td>I2C SCL</td>
						<td>GPIO18</td>
						<td>I2C Clock</td>
					</tr>
					<tr>
						<td>Display Power</td>
						<td>GPIO15</td>
						<td>Control display power</td>
					</tr>
					<tr>
						<td>Left Button</td>
						<td>GPIO0</td>
						<td>User interaction button</td>
					</tr>
					<tr>
						<td>Right Button</td>
						<td>GPIO14</td>
						<td>User interaction button</td>
					</tr>
				</tbody>
			</table>

			<h2 id="software-components">Software Components</h2>
			<h3>Libraries Used</h3>
			<ul>
				<li>
					<code>Arduino.h</code>: Core Arduino functionalities.
				</li>
				<li>
					<code>Wire.h</code>: I2C communication.
				</li>
				<li>
					<code>Adafruit_MPU6050.h</code>: Interface with the MPU6050
					accelerometer.
				</li>
				<li>
					<code>esp_sleep.h</code>: Deep sleep functionalities.
				</li>
				<li>
					<code>TFT_eSPI.h</code>: TFT display control.
				</li>
				<li>
					<code>WiFi.h</code>: WiFi functionalities.
				</li>
				<li>
					<code>WebServer.h</code>: Web server for handling OTA updates.
				</li>
				<li>
					<code>HTTPClient.h</code>: HTTP client for fetching OTA updates.
				</li>
				<li>
					<code>ArduinoJson.h</code>: JSON parsing and serialization.
				</li>
			</ul>

			<h3>Core Modules</h3>
			<ul>
				<li>
					<code>choice_sculpture.ino</code>: Main application logic.
				</li>
				<li>
					<code>WiFiManager.h</code> / <code>WiFiManager.cpp</code>: WiFi
					management and OTA update handling.
				</li>
				<li>
					<code>display.h</code> / <code>display.cpp</code>: Display control and
					UI functionalities.
				</li>
				<li>
					<code>sensor.h</code> / <code>sensor.cpp</code>: Accelerometer setup
					and handling.
				</li>
				<li>
					<code>utils.h</code> / <code>utils.cpp</code>: Utility functions.
				</li>
				<li>
					<code>words.h</code> / <code>words.cpp</code>: Word list for display.
				</li>
			</ul>

			<h2 id="functionality">Functionality</h2>
			<h3>Initialization</h3>
			<p>
				The <code>setup()</code> function initializes the serial communication,
				display, buttons, I2C, MPU6050 sensor, and WiFi manager. It also shows a
				welcome screen and instructions on the display.
			</p>

			<h3>Main Loop</h3>
			<p>
				The <code>loop()</code> function handles button presses, accelerometer
				data processing, and display updates:
			</p>
			<ul>
				<li>
					<strong>Button Handling</strong>: Detects short press, long press, and
					double press actions to toggle deep sleep, start WiFi manager, or
					display a certificate.
				</li>
				<li>
					<strong>Accelerometer Data Processing</strong>: Detects movements and
					updates the display with acceleration data or generated pixel art.
				</li>
				<li>
					<strong>Display Control</strong>: Updates the display based on user
					interactions and sensor data.
				</li>
			</ul>

			<h3>Button Handling</h3>
			<ul>
				<li>
					<strong>Left Button</strong>: Handles short, long, and double presses.
				</li>
				<li>
					<strong>Right Button</strong>: Toggles color inversion on the display.
				</li>
			</ul>

			<h3>OTA Updates</h3>
			<p>
				The WiFi manager sets up an access point for the user to connect and
				enter WiFi credentials. It then checks for firmware updates and performs
				OTA updates if a new firmware version is available.
			</p>

			<h2 id="generative-art-creation">Generative Art Creation</h2>
			<h3>Using Accelerometer Data</h3>
			<p>
				The Choice Sculpture uses real-time accelerometer data from the MPU6050
				sensor to create generative artworks. The process involves detecting
				movements and translating the data into visual patterns displayed on the
				TFT screen.
			</p>

			<h3>Data Processing</h3>
			<ol>
				<li>
					<strong>Movement Detection</strong>:
					<pre>
						<code>{`
  // Read accelerometer data
  sensors_event_t a, g, temp;
  mpu.getEvent(&a, &g, &temp);

  float accelY = a.acceleration.y;
  unsigned long currentTime = millis();
          `}</code>
					</pre>
				</li>
				<li>
					<strong>State Management</strong>:
					<pre>
						<code>{`
  switch (movementState) {
      case WAITING_FOR_UP:
          if (accelY > threshold) {
              movementState = WAITING_FOR_DOWN;
              lastMoveTime = currentTime;
              //Serial.println("Detected UP movement");
          }
          break;
      case WAITING_FOR_DOWN:
          if (accelY < -threshold && (currentTime - lastMoveTime) < moveWindow) {
              displayAcceleration(accelY); // Display acceleration
              delay(1000); // Allow time to view the acceleration
              generatePixelArtWithAnimation(accelY);
              movementState = WAITING_FOR_UP;
              lastMoveTime = currentTime;
          } else if ((currentTime - lastMoveTime) >= moveWindow) {
              movementState = WAITING_FOR_UP;
          }
          break;
  }
          `}</code>
					</pre>
				</li>
			</ol>

			<h3>Artwork Generation</h3>
			<ol>
				<li>
					<strong>Grid Creation</strong>:
					<pre>
						<code>{`
  const int columns = 8; // Number of columns
  const int rows = 5; // Number of rows

  int cellWidth = tft.width() / columns;
  int cellHeight = tft.height() / rows;
          `}</code>
					</pre>
				</li>
				<li>
					<strong>Color Selection</strong>:
					<pre>
						<code>{`
  void chooseRandomStableColor() {
      uint16_t colors[] = {
          tft.color565(220, 76, 153),  // Pink
          tft.color565(220, 162, 76),  // Orange
          tft.color565(76, 220, 89),   // Green
          tft.color565(76, 81, 220)    // Blue
      };

      stableColor = colors[random(0, 4)];
  }
          `}</code>
					</pre>
				</li>
				<li>
					<strong>Dynamic Display</strong>:
					<pre>
						<code>{`
  void generatePixelArtWithAnimation(float force) {
      bool showWord = false;
      wordCounter++; // Increment the word counter
      colorCounter++; // Increment the color counter

      if (wordCounter >= nextWordDisplayCount) {
          showWord = true;
          wordCounter = 0; // Reset the word counter
      }

      if (colorCounter >= nextColorChangeCount) {
          chooseRandomStableColor(); // Change the stable color
          colorCounter = 0; // Reset the color counter
      }

      int seedValue = int(force * 1000) + millis();
      randomSeed(seedValue);

      int totalCells = columns * rows;
      int delayPerCell = 1500 / totalCells; // 1.5 second divided by total number of cells

      tft.fillScreen(invertColors ? TFT_WHITE : TFT_BLACK);

      DynamicJsonDocument doc(1024);
      doc["loading"] = false;
      uint64_t chipid_ = ESP.getEfuseMac(); // Get Chip ID
      String chipIDStr_ = String(chipid_, HEX);

      doc["chip_id"] = chipIDStr_;

      if (showWord) {
          const char* randomWord = displayRandomWord(); // Display and get the random word
          uint16_t wordColor = stableColor; // Use the current stable color for the word
          doc["word"] = randomWord;
          doc["color"] = String(wordColor, HEX);
      } else {
          JsonArray grid = doc.createNestedArray("grid");
          for (int y = 0; y < rows; y++) {
              for (int x = 0; x < columns; x++) {
                  uint16_t color = drawCell(x, y, cellWidth, cellHeight, stableColor);
                  grid.add(String(color, HEX));
                  delay(delayPerCell);
              }
          }
          doc["acceleration"] = String(fabs(force), 2) + " m/s²";
      }

      String jsonString;
      serializeJson(doc, jsonString);
      Serial.println(jsonString);
  }

  uint16_t drawCell(int x, int y, int cellWidth, int cellHeight, uint16_t stableColor) {
      float rand = random(100) / 100.0;
      uint16_t color;
      if (rand < 0.75) {
          color = invertColors ? TFT_WHITE : TFT_BLACK;
      } else if (rand < 0.85) {
          color = invertColors ? TFT_BLACK : TFT_WHITE;
      } else {
          color = stableColor;
      }

      tft.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight, color);
      return color;
  }
          `}</code>
					</pre>
				</li>
				<li>
					<strong>Word Display</strong>:
					<pre>
						<code>{`
  const char* displayRandomWord() {
      static char wordBuffer[20]; // Buffer to hold the word
      tft.fillScreen(TFT_BLACK); // Clear the screen
      tft.setTextColor(stableColor, TFT_BLACK); // Stable color text on black background
      tft.setTextSize(2); // Smaller text size
      tft.setTextDatum(MC_DATUM); // Centered text
      int randomIndex = random(0, wordsCount); // Choose a random index
      const char* word = words[randomIndex];

      int len = strlen(word);
      int x = (tft.width() - tft.textWidth(word, 2)) / 2; // Center the starting position
      int y = tft.height() / 2 - tft.fontHeight(2) / 2; // Center vertically
      int delayPerChar = 2000 / len; // 2 seconds divided by the number of characters

      for (int i = 0; i < len; i++) {
          tft.drawChar(word[i], x, y, 2);
          x += tft.textWidth(String(word[i]), 2); // Move cursor to the right for the next character
          delay(delayPerChar);
      }

      strncpy(wordBuffer, word, sizeof(wordBuffer)); // Copy the word into the buffer
      return wordBuffer;
  }
          `}</code>
					</pre>
				</li>
			</ol>

			<h2 id="compilation-and-deployment">Compilation and Deployment</h2>
			<h3>Prerequisites</h3>
			<ul className="compilation">
				<li>Arduino IDE or PlatformIO</li>
				<li>ESP32 board package installed</li>
				<li>
					Necessary libraries installed (Adafruit_MPU6050, TFT_eSPI,
					ArduinoJson, WiFiManager, etc.)
				</li>
				<li>
					<strong>LilyGo T-Display S3 Setup</strong>:
					<ul>
						<li>
							Follow the instructions from the{" "}
							<a href="https://github.com/Xinyuan-LilyGO/T-Display-S3">
								official LilyGo T-Display S3 documentation
							</a>
							.
						</li>
						<li>
							<strong>Steps for Arduino IDE</strong>:
							<ol>
								<li>Open the Arduino IDE.</li>
								<li>
									Go to <code>File > Preferences</code>.
								</li>
								<li>
									In the "Additional Boards Manager URLs" field, add the
									following URL:{" "}
									<code>
										https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
									</code>
									.
								</li>
								<li>
									Go to <code>Tools > Board > Boards Manager</code>.
								</li>
								<li>
									Search for "esp32" and install the latest version of the ESP32
									board package.
								</li>
								<li>
									Select{" "}
									<code>
										Tools > Board > ESP32 Arduino > ESP32S3 Dev Module
									</code>
									.
								</li>
								<li>
									Download the T-Display S3 library from the{" "}
									<a href="https://github.com/Xinyuan-LilyGO/T-Display-S3">
										LilyGo GitHub repository
									</a>
									.
								</li>
								<li>
									Follow the setup instructions provided in the repository to
									configure the display and other peripherals.
								</li>
							</ol>
						</li>
					</ul>
				</li>
			</ul>

			<h3>Steps to Compile</h3>
			<ol>
				<li>Open the project in Arduino IDE or PlatformIO.</li>
				<li>Select the appropriate ESP32 board from the board manager.</li>
				<li>Ensure all necessary libraries are installed.</li>
				<li>Compile the project.</li>
			</ol>

			<h3>Flashing the Firmware</h3>
			<ol>
				<li>Connect the ESP32 to your computer via USB.</li>
				<li>Select the correct serial port in the IDE.</li>
				<li>Upload the compiled firmware to the ESP32.</li>
			</ol>

			<h2 id="ota-firmware-update">OTA Firmware Update</h2>
			<h3>Instructions</h3>
			<ol>
				<li>
					<strong>Compile the Binary</strong>:
					<ul>
						<li>
							Follow the steps mentioned in the{" "}
							<a href="#compilation-and-deployment">
								Compilation and Deployment
							</a>{" "}
							section to compile the firmware.
						</li>
						<li>
							Locate the compiled binary file (<code>.bin</code>).
						</li>
					</ul>
				</li>
				<li>
					<strong>Upload the Binary</strong>:
					<ul>
						<li>
							Upload the binary file to the OTA update endpoint specified in the
							firmware (default:{" "}
							<code>https://stevezafeiriou.com/wp-json/choice/v1/firmware</code>
							).
						</li>
					</ul>
				</li>
				<li>
					<strong>Perform OTA Update</strong>:
					<ul>
						<li>
							On the device, press the left button twice to start the WiFi
							manager.
						</li>
						<li>
							Connect to the "Choice Wifi Manager_AP" network and navigate to{" "}
							<code>http://192.168.4.1</code> in your web browser.
						</li>
						<li>Enter your WiFi credentials.</li>
						<li>
							The device will check for updates and automatically download and
							install the new firmware if available.
						</li>
					</ul>
				</li>
			</ol>

			<h2 id="file-descriptions">File Descriptions</h2>
			<h3>Main Application</h3>
			<ul>
				<li>
					<code>choice_sculpture.ino</code>: Main firmware file that initializes
					and controls the overall application logic.
				</li>
			</ul>

			<h3>WiFi Manager</h3>
			<ul>
				<li>
					<code>WiFiManager.h / WiFiManager.cpp</code>: Manages WiFi connections
					and OTA updates.
				</li>
			</ul>

			<h3>Display</h3>
			<ul>
				<li>
					<code>display.h / display.cpp</code>: Contains functions to control
					the TFT display and render various UI elements.
				</li>
			</ul>

			<h3>Sensor</h3>
			<ul>
				<li>
					<code>sensor.h / sensor.cpp</code>: Handles the initialization and
					data retrieval from the MPU6050 accelerometer.
				</li>
			</ul>

			<h3>Utilities</h3>
			<ul>
				<li>
					<code>utils.h / utils.cpp</code>: Provides utility functions such as
					reading battery voltage, displaying random words, etc.
				</li>
			</ul>

			<h3>Words</h3>
			<ul>
				<li>
					<code>words.h / words.cpp</code>: Contains the list of words used for
					display.
				</li>
			</ul>

			<h2 id="glossary">Glossary</h2>
			<ul>
				<li>
					<strong>OTA (Over-The-Air)</strong>: The process of wirelessly
					updating the firmware of a device.
				</li>
				<li>
					<strong>MPU6050</strong>: A sensor module that combines a 3-axis
					gyroscope and a 3-axis accelerometer.
				</li>
				<li>
					<strong>TFT Display</strong>: A thin-film-transistor liquid-crystal
					display used to show information.
				</li>
				<li>
					<strong>ESP32</strong>: A low-cost, low-power system on a chip (SoC)
					with Wi-Fi and Bluetooth capabilities.
				</li>
			</ul>
			<button onClick={handleDocs}>Go Back</button>
			<InfoCard>
				<p>
					© 2024, Saphire Labs - Stefanos D. Zafeiriou. All Rights Reserved.
				</p>
			</InfoCard>
		</DocumentationContainer>
	);
};

export default Documentation;
