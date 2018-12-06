class Exercises():
    def __init__(self, desc, benefits, steps):
        self.desc = desc
        self.benefits = benefits
        self.steps = steps

    def get_desc(self):
        return self.desc

    def get_benefits(self):
        return self.benefits

    def get_steps(self):
        return self.steps

    def set_desc(self, desc):
        self.desc = desc

    def set_benefits(self, benefits):
        self.benefits = benefits

    def set_steps(self, steps):
        self.steps = steps
