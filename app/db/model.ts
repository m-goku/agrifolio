import mongoose from "mongoose";
import { ProfileTypes } from "./types";
import { Services } from "./types";
import { UserRegisterTypes } from "./types";

export const servicesSchema = new mongoose.Schema<Services>({
  serviceId: {
    type: Number,
  },
  serviceTitle: {
    type: String,
  },
  serviceDescription: {
    type: String,
  },
  serviceCategory: {
    type: String,
  },
  location: {
    type: String,
  },
  priceRange: {
    type: String,
  },
  availability: {
    type: String,
  },

  image: {
    type: String,
  },
});

export const profileSchema = new mongoose.Schema<ProfileTypes>(
  {
    pid: {
      type: String,
      unique: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    businessProfile: {
      logo: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      heroText: {
        type: String,
      },
      heroDescription: {
        type: String,
      },
      heroImage: {
        type: String,
      },
      keyServices: {
        type: [Object],
      },
      aboutUs: {
        whoWeAre: {
          type: String,
          required: true,
        },
        whoWeAreImage: {
          type: String,
          required: true,
        },
        whatWeDo: {
          type: String,
          required: true,
        },
        whatWeDoImage: {
          type: String,
          required: true,
        },
        historyAndMission: {
          type: String,
          required: true,
        },
        values: {
          type: String,
          required: true,
        },
        valuesImage: {
          type: String,
          required: true,
        },
        ourTeam: {
          type: String,
          required: true,
        },
        ourTeamImage: {
          type: String,
          required: true,
        },
      },
      services: {
        type: [servicesSchema],
      },
    },
    contactInformation: {
      country: {
        type: String,
        required: true,
      },
      region: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      serviceAreas: {
        type: [String],
      },
      address: {
        type: [String],
      },
      workingHours: {
        type: [String],
      },
      additionalInfo: {
        type: [String],
      },
    },
    gallery: {
      type: [Object],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema<UserRegisterTypes>(
  {
    businessName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: [],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Profile =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export const Service =
  mongoose.models.Service || mongoose.model("Service", servicesSchema);
