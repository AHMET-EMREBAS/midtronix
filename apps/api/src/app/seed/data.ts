import {
  Category,
  Department,
  Manufacturer,
  PriceLevel,
  Store,
} from '@mdtx/entities';
import { ISupplier } from '@mdtx/models';
import { Repository } from 'typeorm';

export const Departments: Partial<Department>[] = [
  { name: 'None' },
  { name: 'Smartphones' },
  { name: 'Security Cameras' },
  { name: 'Home Security Systems' },
  { name: 'Accessories' },
  { name: 'Networking Devices' },
  { name: 'Intercom Systems' },
  { name: 'Surveillance Accessories' },
  { name: 'Personal Security Devices' },
  { name: 'Installation Services' },
  { name: 'Maintenance and Support' },
];

export const Categories: Partial<Category>[] = [
  { name: 'None' },
  { name: 'Apple' },
  { name: 'Samsung' },
  { name: 'Google Pixel' },
  { name: 'OnePlus' },
  { name: 'Xiaomi' },
  { name: 'Huawei' },
  { name: 'Oppo' },
  { name: 'Vivo' },
  { name: 'Sony Xperia' },
  { name: 'Indoor Cameras' },
  { name: 'Outdoor Cameras' },
  { name: 'Wireless Cameras' },
  { name: 'Wired Cameras' },
  { name: 'Dome Cameras' },
  { name: 'Bullet Cameras' },
  { name: 'PTZ (Pan-Tilt-Zoom) Cameras' },
  { name: '360-Degree Cameras' },
  { name: 'Hidden Cameras' },
  { name: 'Smart Alarm Systems' },
  { name: 'CCTV Systems' },
  { name: 'Motion Sensors' },
  { name: 'Door and Window Sensors' },
  { name: 'Glass Break Sensors' },
  { name: 'Smoke and Carbon Monoxide Detectors' },
  { name: 'Smart Locks' },
  { name: 'Video Doorbells' },
  { name: 'Home Automation Systems' },
  { name: 'Phone Cases and Covers' },
  { name: 'Screen Protectors' },
  { name: 'Charging Cables and Adapters' },
  { name: 'Power Banks' },
  { name: 'Phone Mounts and Stands' },
  { name: 'Memory Cards and USB Drives' },
  {
    name: 'Home Security System Accessories (e.g., mounting brackets, extension cables)',
  },
  { name: 'Routers' },
  { name: 'Mesh Wi-Fi Systems' },
  { name: 'Range Extenders' },
  { name: 'Network Switches' },
  { name: 'Ethernet Cables' },
  { name: 'Powerline Adapters' },
  { name: 'Wired Intercom Systems' },
  { name: 'Wireless Intercom Systems' },
  { name: 'Video Intercom Systems' },
  { name: 'Door Entry Systems' },
  { name: 'Security Camera Mounts' },
  { name: 'CCTV Power Supplies' },
  { name: 'Surveillance Signs' },
  { name: 'Cable Management Solutions' },
  { name: 'DVRs (Digital Video Recorders)' },
  { name: 'NVRs (Network Video Recorders)' },
  { name: 'Personal Alarms' },
  { name: 'Pepper Sprays' },
  { name: 'Self-Defense Keychains' },
  { name: 'Safety Whistles' },
  { name: 'Stun Guns' },
  { name: 'Home Security System Installation' },
  { name: 'Security Camera Installation' },
  { name: 'Network Setup and Configuration' },
  { name: 'Smart Home Integration Services' },
  { name: 'Extended Warranty Plans' },
  { name: 'Technical Support Services' },
  { name: 'Maintenance Packages for Security Systems' },
  { name: 'Software Updates and Upgrades' },
];

export const Manufacturers: Partial<Manufacturer>[] = [
  {
    name: 'Axis Communications',

    description:
      'A well-known manufacturer of network cameras and other surveillance equipment.',
  },
  {
    name: 'Hikvision',
    description:
      'A Chinese company that has a significant market share in the surveillance camera industry globally, although it has faced some scrutiny over security concerns.',
  },
  {
    name: 'Dahua Technology',
    description:
      'Another major Chinese manufacturer of surveillance equipment.',
  },
  {
    name: 'Bosch Security Systems',
    description:
      'Offers a range of security solutions including cameras and video surveillance systems.',
  },
  {
    name: 'Panasonic Security',
    description:
      'Provides a variety of security camera solutions for different applications.',
  },
  {
    name: 'Avigilon Corporation',
    description:
      'Known for high-definition surveillance systems and video analytics.',
  },
  {
    name: 'Hanwha Techwin (formerly Samsung Techwin)',
    description: 'Produces a range of surveillance cameras and equipment.',
  },
  {
    name: 'FLIR Systems',
    description:
      'Known for thermal imaging cameras used in security applications.',
  },
  {
    name: 'Pelco by Schneider Electric',
    description:
      'Offers a wide range of video surveillance products including cameras.',
  },
  {
    name: 'Sony Security Systems',
    description:
      'Provides surveillance cameras and related equipment for various applications.',
  },
  {
    name: 'Vivotek',
    description:
      'A Taiwanese manufacturer specializing in IP surveillance solutions.',
  },
  {
    name: 'Arecont Vision',
    description:
      'Known for megapixel IP cameras and video surveillance systems.',
  },
  {
    name: 'Lorex Technology',
    description:
      'Offers a range of security camera systems for residential and commercial use.',
  },
  {
    name: 'TRENDnet',
    description:
      'Provides networking and surveillance solutions including IP cameras.',
  },
  {
    name: 'Uniview',
    description:
      'A Chinese company specializing in video surveillance products.',
  },
];

export const Suppliers: Partial<ISupplier>[] = [
  {
    name: 'Axis Communications',
    description:
      'A well-known manufacturer of network cameras and other surveillance equipment.',
  },
  {
    name: 'Hikvision',
    description:
      'A Chinese company that has a significant market share in the surveillance camera industry globally, although it has faced some scrutiny over security concerns.',
  },
  {
    name: 'Dahua Technology',
    description:
      'Another major Chinese manufacturer of surveillance equipment.',
  },
  {
    name: 'Bosch Security Systems',
    description:
      'Offers a range of security solutions including cameras and video surveillance systems.',
  },
  {
    name: 'Panasonic Security',
    description:
      'Provides a variety of security camera solutions for different applications.',
  },
  {
    name: 'Avigilon Corporation',
    description:
      'Known for high-definition surveillance systems and video analytics.',
  },
  {
    name: 'Hanwha Techwin (formerly Samsung Techwin)',
    description: 'Produces a range of surveillance cameras and equipment.',
  },
  {
    name: 'FLIR Systems',
    description:
      'Known for thermal imaging cameras used in security applications.',
  },
  {
    name: 'Pelco by Schneider Electric',
    description:
      'Offers a wide range of video surveillance products including cameras.',
  },
  {
    name: 'Sony Security Systems',
    description:
      'Provides surveillance cameras and related equipment for various applications.',
  },
  {
    name: 'Vivotek',
    description:
      'A Taiwanese manufacturer specializing in IP surveillance solutions.',
  },
  {
    name: 'Arecont Vision',
    description:
      'Known for megapixel IP cameras and video surveillance systems.',
  },
  {
    name: 'Lorex Technology',
    description:
      'Offers a range of security camera systems for residential and commercial use.',
  },
  {
    name: 'TRENDnet',
    description:
      'Provides networking and surveillance solutions including IP cameras.',
  },
  {
    name: 'Uniview',
    description:
      'A Chinese company specializing in video surveillance products.',
  },
  {
    name: 'Anixter',
    description:
      'A global distributor of security products including cameras, cables, and networking equipment.',
  },
  {
    name: 'Graybar',
    description:
      'Distributes a variety of security products including cameras, access control systems, and networking equipment.',
  },
  {
    name: 'ADT',
    description:
      'Provides integrated security solutions including surveillance cameras and monitoring services.',
  },
  {
    name: 'Johnson Controls',
    description:
      'Offers a range of security solutions including cameras, access control systems, and monitoring services.',
  },
  // Add more suppliers here if needed
];

export const PriceLevels: Partial<PriceLevel>[] = [
  {
    id: 1,
    name: 'Chicago Retail Price',
    description: 'Chicago Retail Price',
    taxrate: 10.25,
  },
  {
    id: 2,
    name: 'Chicago Wholesale Price',
    description: 'Wholesale Price',
    taxrate: 0,
  },
];

export const Stores: Partial<Store>[] = [
  { name: 'Chicago' },
  { name: 'California' },
  { name: 'Houston' },
  { name: 'Austin' },
];

export function saveCategories(repo: Repository<Category>) {
  return repo.save(Categories);
}
export function saveDepartments(repo: Repository<Category>) {
  return repo.save(Departments);
}

export function saveManufacturers(repo: Repository<Manufacturer>) {
  return repo.save(Manufacturers);
}

export function savePriceLevels(repo: Repository<PriceLevel>) {
  return repo.save(PriceLevels);
}
