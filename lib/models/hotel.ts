import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  amenities: [String],
  images: [String],
  status: {
    type: String,
    enum: ['available', 'booked', 'maintenance'],
    default: 'available',
  },
});

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      address: String,
      city: String,
      state: String,
      country: String,
      coordinates: {
        type: {
          type: String,
          enum: ['Point'],
          default: 'Point',
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
    },
    images: [String],
    amenities: [String],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    rooms: [roomSchema],
    manager: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    policies: {
      checkInTime: String,
      checkOutTime: String,
      cancellationPolicy: String,
    },
  },
  {
    timestamps: true,
  }
);

hotelSchema.index({ 'location.coordinates': '2dsphere' });

export const Hotel = mongoose.models.Hotel || mongoose.model('Hotel', hotelSchema);