const mraa = require('mraa');

function char(x) { return parseInt(x, 16); }

const i2c = new mraa.I2c(1);
i2c.address(0x42);

setInterval(() => {
	i2c.writeByte(char('0x0'));
	const frame = i2c.read(27); 
	console.log('quality: ', frame.readInt16LE(10));
	console.log('ground_distance: ', frame.readUInt16LE(20));
	console.log('flow_comp_m_x:', frame.readInt16LE(6) / 1000, ' m/s');
	console.log('flow_comp_m_y:', frame.readInt16LE(8) / 1000, ' m/s');
	console.log('gyro_x_rate', frame.readInt16LE(12));
	console.log('gyro_y_rate', frame.readInt16LE(14));
	console.log('gyro_z_rate', frame.readInt16LE(16));
	/*i2c.writeByte(char('0x16'));
	const integralFrame = i2c.read(25)

	console.log('ground_distance: ', frame.readUInt16LE(20));
	console.log('ground_distance: ', integralFrame.readInt16LE(20))
	console.log('flow_comp_m_x:', frame.readInt16LE(6));
	console.log('flow_comp_m_y:', frame.readInt16LE(8));
	console.log('gyro_x_rate', frame.readInt16LE(12));
	console.log('gyro_y_rate', frame.readInt16LE(14));
	console.log('gyro_z_rate', frame.readInt16LE(16));*/
}, 100);
