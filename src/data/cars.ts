export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: 'New' | 'Used' | 'Certified';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'Sedan' | 'SUV' | 'Truck' | 'Coupe' | 'Convertible' | 'Hatchback';
  color: string;
  description: string;
  features: string[];
  images: string[];
  isFeatured: boolean;
  vin: string;
}

export const cars: Car[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model S',
    year: 2024,
    price: 89990,
    mileage: 0,
    condition: 'New',
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Midnight Silver Metallic',
    description: 'Experience the pinnacle of electric performance with the Tesla Model S. This luxury sedan combines cutting-edge technology with unmatched acceleration and range.',
    features: [
      'Autopilot',
      '405 mile range',
      '0-60 in 3.1s',
      '17" Touchscreen',
      'Premium Audio',
      'Glass Roof',
      'Heated Seats'
    ],
    images: ['/images/cars/tesla-model-s-1.jpg', '/images/cars/tesla-model-s-2.jpg'],
    isFeatured: true,
    vin: 'TESLA123456789'
  },
  {
    id: '2',
    make: 'BMW',
    model: 'M5',
    year: 2024,
    price: 106800,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Alpine White',
    description: 'The BMW M5 represents the perfect blend of luxury and performance. With its twin-turbo V8 engine and sophisticated chassis, it delivers an exhilarating driving experience.',
    features: [
      '617 HP V8 Engine',
      'M xDrive AWD',
      'Carbon Fiber Roof',
      'M Sport Exhaust',
      'Harman Kardon Audio',
      'Heads-Up Display',
      'Adaptive M Suspension'
    ],
    images: ['/images/cars/bmw-m5-1.jpg', '/images/cars/bmw-m5-2.jpg'],
    isFeatured: true,
    vin: 'BMW987654321'
  },
  {
    id: '3',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 116950,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Guards Red',
    description: 'The iconic Porsche 911 continues its legacy with the latest Carrera model. Timeless design meets modern performance in this legendary sports car.',
    features: [
      '379 HP Flat-6 Engine',
      'PDK Transmission',
      'Sport Chrono Package',
      'PASM Suspension',
      'Porsche Communication Management',
      'LED Headlights',
      'Sport Exhaust System'
    ],
    images: ['/images/cars/porsche-911-1.jpg', '/images/cars/porsche-911-2.jpg'],
    isFeatured: true,
    vin: 'PORSCHE111222333'
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2023,
    price: 114500,
    mileage: 5200,
    condition: 'Certified',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Obsidian Black',
    description: 'The Mercedes-Benz S-Class sets the standard for luxury sedans. This certified pre-owned model offers flagship luxury at an exceptional value.',
    features: [
      'MBUX Infotainment',
      'Air Balance Package',
      'Burmester 4D Audio',
      'Active Multi-Contour Seats',
      'Panoramic Sunroof',
      'Night Vision Assist',
      'Executive Rear Seat Package'
    ],
    images: ['/images/cars/mercedes-s-class-1.jpg', '/images/cars/mercedes-s-class-2.jpg'],
    isFeatured: true,
    vin: 'MERCEDES444555666'
  },
  {
    id: '5',
    make: 'Audi',
    model: 'RS6 Avant',
    year: 2024,
    price: 123500,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Nardo Gray',
    description: 'The Audi RS6 Avant combines supercar performance with practical wagon versatility. Perfect for those who refuse to compromise.',
    features: [
      '591 HP Twin-Turbo V8',
      'Quattro AWD',
      'Dynamic Ride Control',
      'Carbon Ceramic Brakes',
      'Bang & Olufsen Audio',
      'Virtual Cockpit Plus',
      'RS Sport Exhaust'
    ],
    images: ['/images/cars/audi-rs6-1.jpg', '/images/cars/audi-rs6-2.jpg'],
    isFeatured: false,
    vin: 'AUDI777888999'
  },
  {
    id: '6',
    make: 'Lexus',
    model: 'LC 500',
    year: 2024,
    price: 99050,
    mileage: 0,
    condition: 'New',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Structural Blue',
    description: 'The Lexus LC 500 is a masterpiece of Japanese engineering and design. This grand tourer offers a perfect blend of luxury, performance, and reliability.',
    features: [
      '471 HP V8 Engine',
      '10-Speed Automatic',
      'Mark Levinson Audio',
      'Active Rear Steering',
      'Adaptive Variable Suspension',
      'Head-Up Display',
      'Alcantara Interior'
    ],
    images: ['/images/cars/lexus-lc500-1.jpg', '/images/cars/lexus-lc500-2.jpg'],
    isFeatured: false,
    vin: 'LEXUS123789456'
  }
];

export function getCarById(id: string): Car | undefined {
  return cars.find(car => car.id === id);
}

export function getFeaturedCars(): Car[] {
  return cars.filter(car => car.isFeatured);
}

export function getCarsByCondition(condition: Car['condition']): Car[] {
  return cars.filter(car => car.condition === condition);
}

export function searchCars(query: string): Car[] {
  const lowerQuery = query.toLowerCase();
  return cars.filter(car => 
    car.make.toLowerCase().includes(lowerQuery) ||
    car.model.toLowerCase().includes(lowerQuery) ||
    car.color.toLowerCase().includes(lowerQuery) ||
    car.bodyType.toLowerCase().includes(lowerQuery)
  );
}
