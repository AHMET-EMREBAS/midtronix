// import { Category, Department, Manufacturer } from '@mdtx/database';
// import { Repository } from 'typeorm';

// let departmentId = 1;
// const Departments: Partial<Department>[] = [
//   'None',
//   'Smartphones',
//   'Security Cameras',
//   'Home Security Systems',
//   'Accessories',
//   'Networking Devices',
//   'Intercom Systems',
//   'Surveillance Accessories',
//   'Personal Security Devices',
//   'Installation Services',
//   'Maintenance and Support',
// ].map((e) => ({ id: departmentId++, name: e }));

// let categoryId = 1;
// const Categories: Partial<Category>[] = [
//   'None',
//   'Apple',
//   'Samsung',
//   'Google Pixel',
//   'OnePlus',
//   'Xiaomi',
//   'Huawei',
//   'Oppo',
//   'Vivo',
//   'Sony Xperia',
//   'Indoor Cameras',
//   'Outdoor Cameras',
//   'Wireless Cameras',
//   'Wired Cameras',
//   'Dome Cameras',
//   'Bullet Cameras',
//   'PTZ (Pan-Tilt-Zoom) Cameras',
//   '360-Degree Cameras',
//   'Hidden Cameras',
//   'Smart Alarm Systems',
//   'CCTV Systems',
//   'Motion Sensors',
//   'Door and Window Sensors',
//   'Glass Break Sensors',
//   'Smoke and Carbon Monoxide Detectors',
//   'Smart Locks',
//   'Video Doorbells',
//   'Home Automation Systems',
//   'Phone Cases and Covers',
//   'Screen Protectors',
//   'Charging Cables and Adapters',
//   'Power Banks',
//   'Phone Mounts and Stands',
//   'Memory Cards and USB Drives',
//   'Home Security System Accessories (e.g., mounting brackets, extension cables)',
//   'Routers',
//   'Mesh Wi-Fi Systems',
//   'Range Extenders',
//   'Network Switches',
//   'Ethernet Cables',
//   'Powerline Adapters',
//   'Wired Intercom Systems',
//   'Wireless Intercom Systems',
//   'Video Intercom Systems',
//   'Door Entry Systems',
//   'Security Camera Mounts',
//   'CCTV Power Supplies',
//   'Surveillance Signs',
//   'Cable Management Solutions',
//   'DVRs (Digital Video Recorders)',
//   'NVRs (Network Video Recorders)',
//   'Personal Alarms',
//   'Pepper Sprays',
//   'Self-Defense Keychains',
//   'Safety Whistles',
//   'Stun Guns',
//   'Home Security System Installation',
//   'Security Camera Installation',
//   'Network Setup and Configuration',
//   'Smart Home Integration Services',
//   'Extended Warranty Plans',
//   'Technical Support Services',
//   'Maintenance Packages for Security Systems',
//   'Software Updates and Upgrades',
// ].map((e) => {
//   return { id: categoryId++, name: e };
// });

// let manufacturerId = 1;
// const Manufacturers: Partial<Manufacturer>[] = ['None', 'Dell'].map((e) => ({
//   id: manufacturerId++,
//   name: e,
// }));

// export function saveCategories(repo: Repository<Category>) {
//   return repo.save(Categories);
// }
// export function saveDepartments(repo: Repository<Category>) {
//   return repo.save(Departments);
// }

// export function saveManufacturers(repo: Repository<Manufacturer>) {
//   return repo.save(Manufacturers);
// }
